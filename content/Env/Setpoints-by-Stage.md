---
title: Environmental Setpoints by Stage
description: Target VPD, temperature, humidity, and CO₂ for each growth phase.
tags: [environment]
updated: 2025-10-25
---

| Stage | Day Temp (°F) | Night Temp (°F) | RH (%) | VPD (kPa) | CO₂ (ppm) |
|-------|---------------|-----------------|--------|-----------|-----------|
| Propagation | 78 | 74 | 75 | 0.8 | 950 |
| Veg Early | 80 | 76 | 70 | 1.0 | 1,050 |
| Veg Late | 82 | 78 | 65 | 1.1 | 1,150 |
| Flower Weeks 1–3 | 82 | 76 | 62 | 1.2 | 1,200 |
| Flower Weeks 4–6 | 80 | 74 | 58 | 1.3 | 1,200 |
| Flower Weeks 7–8 | 78 | 72 | 55 | 1.4 | 1,000 |
| Flush | 76 | 70 | 52 | 1.5 | 800 |

## Implementation Notes

- Update room controllers through the BMS scenes listed in [[Env/Rooms/Flower]].
- Use the [[Calculators/Lighting]] worksheet to confirm PPFD remains within ±5% when dimming.
- Log any adjustments outside these ranges in [[Data/Crop-Log]] with reason and duration.
