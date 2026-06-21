#!/usr/bin/env python3
"""Derive a dark-theme Codefy logo from the official light-bg PNG.

- Removes the solid white background via flood-fill from the border (so the
  white inside the badge mark and the letter counters stay intact).
- Keeps the blue badge exactly as-is.
- Recolors the dark navy wordmark to light (#f8fafc) with alpha = darkness, so
  it anti-aliases cleanly against the dark site background.
- Trims to content + small padding.
"""
from PIL import Image, ImageDraw

SRC = "public/logo.png"
OUT = "public/logo-dark.png"
LIGHT = (248, 250, 252)
SENTINEL = (255, 0, 255)
FLOOD_THRESH = 120  # summed RGB diff from white
PAD = 24

img = Image.open(SRC).convert("RGB")
W, H = img.size

# 1) Flood-fill the white background from every corner with a sentinel color.
flood = img.copy()
for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1)]:
    ImageDraw.floodfill(flood, seed, SENTINEL, thresh=FLOOD_THRESH)
fpx = flood.load()

# 2) Find the blue badge bounding box (keep that region untouched).
spx = img.load()
bx0, by0, bx1, by1 = W, H, 0, 0
found_blue = False
for y in range(H):
    for x in range(W):
        r, g, b = spx[x, y]
        if b > 110 and b > r + 30 and b > g + 20:
            found_blue = True
            bx0, by0 = min(bx0, x), min(by0, y)
            bx1, by1 = max(bx1, x), max(by1, y)
if found_blue:
    pad = 8
    bx0, by0 = max(0, bx0 - pad), max(0, by0 - pad)
    bx1, by1 = min(W - 1, bx1 + pad), min(H - 1, by1 + pad)
print(f"badge bbox: ({bx0},{by0})-({bx1},{by1})  blue_found={found_blue}")

# 3) Compose the dark RGBA.
out = Image.new("RGBA", (W, H), (0, 0, 0, 0))
opx = out.load()
for y in range(H):
    for x in range(W):
        if fpx[x, y] == SENTINEL:
            continue  # background -> transparent
        r, g, b = spx[x, y]
        in_badge = bx0 <= x <= bx1 and by0 <= y <= by1
        if in_badge:
            opx[x, y] = (r, g, b, 255)  # keep badge exactly
        else:
            lum = (299 * r + 587 * g + 114 * b) / 1000
            darkness = 1.0 - lum / 255.0
            a = int(max(0.0, min(1.0, darkness * 1.25)) * 255)
            if a > 0:
                opx[x, y] = (LIGHT[0], LIGHT[1], LIGHT[2], a)

# 4) Trim to content + padding.
bbox = out.getbbox()
if bbox:
    l, t, r, b = bbox
    l, t = max(0, l - PAD), max(0, t - PAD)
    r, b = min(W, r + PAD), min(H, b + PAD)
    out = out.crop((l, t, r, b))

out.save(OUT)
print(f"saved {OUT}  size={out.size}")
