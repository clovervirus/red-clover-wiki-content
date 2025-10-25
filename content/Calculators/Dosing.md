---
title: Dosing Calculator
description: Convert fertilizer targets between EC, ppm, and stock solution volumes.
tags: [calculators, feeding]
updated: 2025-10-25
---

### Inputs
1. Enter target EC (mS/cm) and reservoir volume (gallons).
2. Record concentrate strength from [[Feeding/Recipes/Mother-Stock]] (default 240 mL/gal).
3. Note current background EC from [[Feeding/Water-Source]].

### Steps
1. Subtract background EC from target to determine net nutrient EC.
2. Use the table below to convert net EC to mL of concentrate per gallon.

| Net EC (mS/cm) | mL Mother Stock per Gallon |
|----------------|----------------------------|
| 0.8 | 180 |
| 1.0 | 200 |
| 1.2 | 220 |
| 1.4 | 240 |
| 1.6 | 260 |

3. Multiply the selected value by reservoir volume to get total concentrate required.
4. If using dry salts, reference the conversion factors appended to this page or consult the spreadsheet linked in the repo `tools/calculators/dosing.xlsx`.
5. Log final EC and pH readings in [[Data/Crop-Log]].
