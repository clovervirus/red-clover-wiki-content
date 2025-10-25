---
title: Flower Room Configuration
description: BMS scenes and device settings for flowering spaces.
tags: [environment, rooms]
updated: 2025-10-25
---

### Controllers

- Scene **FLOW-STD**: loads setpoints from [[Env/Setpoints-by-Stage]] flower weeks 1–3.
- Scene **FLOW-LATE**: reduces CO₂ to 1,000 ppm and ramps exhaust fans to 80%.
- Scene **FLOW-FLUSH**: disables CO₂, increases exhaust to 100%, and lowers RH to 52%.

### Daily Tasks

1. Verify humidifier fill status during the [[SOP/Daily#opening-0700|opening walk]].
2. Inspect dehumidifier buckets; empty and sanitize if biofilm is present.
3. Confirm racking fans are oscillating; if not, submit a ticket in [[Admin/How-to-Update#submit-a-change-request]].

### Weekly Tasks

- Run a thermal image survey each Monday and log hotspots in [[Data/Crop-Log]].
- Clean sensor housings with isopropyl and swap desiccant packs.
- Cross-check PPFD uniformity with the map in [[Env/Lights/Fixture-Rotation]].
