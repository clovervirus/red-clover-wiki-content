---
title: Lighting Calculator
description: Determine dimming percentages to hit PPFD targets.
tags: [calculators, lighting]
updated: 2025-10-25
---

### Inputs
1. Current PPFD measurement at canopy height.
2. Target PPFD from [[Env/Lights/Fixture-Rotation]].
3. Fixture maximum output (µmol·m⁻²·s⁻¹) at 100%.

### Calculation
1. **Target Ratio:** Target PPFD ÷ Max Output.
2. **Adjustment:** Target Ratio ÷ (Measured PPFD ÷ Max Output).
3. Set fixture dimming to `Adjustment × Current Dimming %`.

### Example
- Measured PPFD: 820
- Target PPFD: 900
- Max Output: 1,100
- Current Dimming: 75%

`Target Ratio = 900 ÷ 1,100 = 0.82`

`Measured Ratio = 820 ÷ 1,100 = 0.75`

`Adjustment = 0.82 ÷ 0.75 = 1.09`

New dimming percentage = `1.09 × 75% = 81.8%` (round to 82%).

Log adjustments in [[Data/Crop-Log]] and update the lighting map in [[Env/Lights/Fixture-Rotation]].
