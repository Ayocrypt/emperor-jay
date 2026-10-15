#!/usr/bin/env python3
"""Diagnostics: inspect edges + row profile of the logo image."""
from PIL import Image
import numpy as np

im = Image.open("/home/z/my-project/upload/pasted_image_1792025261021.png").convert("RGB")
arr = np.array(im).astype(np.float32)
lum = arr.max(axis=2)
H, W = lum.shape

print("corner pixels (5x5 mean):")
print("TL", arr[:5, :5].mean(axis=(0, 1)))
print("TR", arr[:5, -5:].mean(axis=(0, 1)))
print("BL", arr[-5:, :5].mean(axis=(0, 1)))
print("BR", arr[-5:, -5:].mean(axis=(0, 1)))
print("edge row 0 mean:", arr[0].mean(axis=0), " row2:", arr[2].mean(axis=0))
print("edge col 0 mean:", arr[:, 0].mean(axis=0), " col2:", arr[:, 2].mean(axis=0))

whiteish = lum > 200
print("rows 0-12 whiteish fraction:", [round(whiteish[r].mean(), 3) for r in range(13)])
print("rows H-13..H-1 whiteish fraction:", [round(whiteish[r].mean(), 3) for r in range(H - 13, H)])

vis = lum > 25
profile = vis.sum(axis=1)
print("\nrow profile (row: count) for rows with count>0:")
runs = []
inrun = False
for r in range(H):
    c = int(profile[r])
    if c > 0 and not inrun:
        start = r; inrun = True
    elif c == 0 and inrun:
        runs.append((start, r - 1)); inrun = False
if inrun:
    runs.append((start, H - 1))
print("content row runs:", runs)
for a, b in runs:
    seg = vis[a:b+1]
    cc = np.where(seg.any(axis=0))[0]
    print(f"  run rows {a}-{b} (h={b-a+1}) cols {cc[0]}-{cc[-1]}")
