#!/usr/bin/env python3
"""Fine-grained vertical profile with several thresholds to find the emblem/wordmark split."""
from PIL import Image
import numpy as np

im = Image.open("/home/z/my-project/upload/pasted_image_1792025261021.png").convert("RGB")
arr = np.array(im).astype(np.float32)
lum = arr.max(axis=2)
H, W = lum.shape

for th in (25, 60, 90, 130):
    vis = lum > th
    profile = vis.sum(axis=1)
    runs = []
    inrun = False
    for r in range(H):
        if profile[r] > 1 and not inrun:
            start = r; inrun = True
        elif profile[r] <= 1 and inrun:
            runs.append((start, r - 1)); inrun = False
    if inrun:
        runs.append((start, H - 1))
    print(f"th={th}: runs={[(a, b, b - a + 1) for a, b in runs]}")

# column profile of the upper half vs lower half at th=90
vis = lum > 90
top = vis[: 150]
bot = vis[150:]
ct = np.where(top.any(axis=0))[0]
cb = np.where(bot.any(axis=0))[0]
print("th=90 upper half cols:", ct[0], "-", ct[-1], " lower half cols:", cb[0], "-", cb[-1])
