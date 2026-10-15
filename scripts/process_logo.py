#!/usr/bin/env python3
"""Process the Emperor Jay Enterprises logo upload (v3 — white card reality):
Structure: black outer margin -> WHITE card -> gold emblem / gold wordmark / dark tagline.

1. Crop to the white card, then trim to content
2. Key out white -> transparency via "distance from white" alpha
3. Split bands (emblem / wordmark / tagline) via clean row-gap analysis
4. Emit: full lockup PNG, square emblem PNG, favicon PNG
"""
from PIL import Image
import numpy as np
import os

SRC = "/home/z/my-project/upload/pasted_image_1792025261021.png"
OUT_DIR = "/home/z/my-project/public/brand"
ICON_PATH = "/home/z/my-project/src/app/icon.png"

os.makedirs(OUT_DIR, exist_ok=True)

im = Image.open(SRC).convert("RGB")
arr = np.array(im).astype(np.float32)
lum = arr.max(axis=2)
H, W = lum.shape
print(f"source: {W}x{H}")

# ---- 1. locate white card bounds (rows/cols that are majority white)
white = lum > 200
fw_rows = [r for r in range(H) if white[r].mean() > 0.5]
fw_cols = [c for c in range(W) if white[:, c].mean() > 0.5]
ft, fb, fl, fr = fw_rows[0], fw_rows[-1], fw_cols[0], fw_cols[-1]
print(f"white card bounds: rows {ft}-{fb}, cols {fl}-{fr}")

arr = arr[ft : fb + 1, fl : fr + 1]
lum = lum[ft : fb + 1, fl : fr + 1]
H, W = lum.shape
print(f"card crop: {W}x{H}")

# trim to actual content (anything not near-white)
d_white = 255.0 - arr.min(axis=2)  # distance from white, 0 = pure white
content = d_white > 20
rows = np.where(content.any(axis=1))[0]
cols = np.where(content.any(axis=0))[0]
r0, r1 = rows[0], rows[-1]
c0, c1 = cols[0], cols[-1]
print(f"content bbox rows {r0}-{r1}, cols {c0}-{c1}")
pad = 6
r0, r1 = max(0, r0 - pad), min(H - 1, r1 + pad)
c0, c1 = max(0, c0 - pad), min(W - 1, c1 + pad)
arr = arr[r0 : r1 + 1, c0 : c1 + 1]
H, W = arr.shape[:2]
print(f"after trim: {W}x{H}")

# ---- 2. white -> alpha (keeps gold + dark tagline, kills white bg)
d = 255.0 - arr.min(axis=2)

def key_white(rgb, lo, hi):
    dd = 255.0 - rgb.min(axis=2)
    a = np.clip((dd - lo) / (hi - lo), 0.0, 1.0)
    a = a * a * (3 - 2 * a)  # smoothstep
    return np.dstack([np.clip(rgb, 0, 255).astype(np.uint8), (a * 255).astype(np.uint8)])

# full lockup keeps the soft glow: gentle ramp
rgba = key_white(arr, 10.0, 55.0)
# emblem uses a harder ramp to shed the light-gray halo
rgba_hard = key_white(arr, 30.0, 90.0)
A = rgba[:, :, 3]

# ---- 3. band split via row gaps (bands: emblem / wordmark / tagline)
vis = A > 40
profile = vis.sum(axis=1)
content_rows = np.where(profile > 2)[0]
gaps = []
prev = content_rows[0]
for rr in content_rows[1:]:
    if rr - prev > 2:
        gaps.append((int(prev), int(rr), int(rr - prev)))
    prev = rr
gaps_sorted = sorted(gaps, key=lambda g: -g[2])
print("row gaps (end,start,size) top6:", gaps_sorted[:6])

# emblem = content ABOVE the first gap scanning from the top (emblem is the top band)
first_gap = next((g for g in gaps if g[2] >= 3), None)
if first_gap:
    split = (first_gap[0] + first_gap[1]) // 2
else:
    split = H
top_part = rgba_hard[:split, :, :]
print(f"split at row {split}; top block {top_part.shape[1]}x{top_part.shape[0]}")

def bbox_of(part):
    v = part[:, :, 3] > 40
    rr = np.where(v.any(axis=1))[0]
    cc = np.where(v.any(axis=0))[0]
    if len(rr) == 0:
        return None
    return int(rr[0]), int(rr[-1]), int(cc[0]), int(cc[-1])

full_bb = bbox_of(rgba)
emblem_bb = bbox_of(top_part)
print("full bbox:", full_bb)
print("emblem bbox:", emblem_bb)

# ---- 4a. full lockup
er0, er1, ec0, ec1 = full_bb
full = rgba[er0 : er1 + 1, ec0 : ec1 + 1]
Image.fromarray(full).save(f"{OUT_DIR}/emperor-jay-logo-full.png")
print("full lockup saved:", full.shape[1], "x", full.shape[0])

# ---- 4b. emblem centered on square canvas
er0, er1, ec0, ec1 = emblem_bb
emb = top_part[er0 : er1 + 1, ec0 : ec1 + 1]
eh, ew = emb.shape[:2]
side = int(max(eh, ew) * 1.08)
canvas = np.zeros((side, side, 4), dtype=np.uint8)
oy = (side - eh) // 2
ox = (side - ew) // 2
canvas[oy : oy + eh, ox : ox + ew] = emb
Image.fromarray(canvas).save(f"{OUT_DIR}/emperor-jay-emblem.png")
print("emblem saved:", side, "x", side, f"(content {ew}x{eh})")

# ---- 4c. favicon 256px
fav = Image.fromarray(canvas).resize((256, 256), Image.LANCZOS)
fav.save(ICON_PATH)
print("favicon saved:", ICON_PATH)
