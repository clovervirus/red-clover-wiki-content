---
title: "{{ strain_name }}"
tags:
  - "{{ strain_type }}"
updated: "{{ updated | date('YYYY-MM-DD') }}"
---

# {{ strain_name }}

## Overview
{{ overview }}

## Lineage
- {{ parent_1 }} × {{ parent_2 }}

## Characteristics
- **Type:** {{ strain_type }}
- **THC:** {{ thc_percentage }}
- **CBD:** {{ cbd_percentage }}
- **Terpene Profile:** {{ terpene_profile }}

## Aroma & Flavor
- {{ aroma_note_1 }}
- {{ aroma_note_2 }}
- {{ aroma_note_3 }}

## Effects
- {{ effect_1 }}
- {{ effect_2 }}
- {{ effect_3 }}

## Medical Uses
- {{ medical_use_1 }}
- {{ medical_use_2 }}
- {{ medical_use_3 }}

## Grow Notes
- **Difficulty:** {{ grow_difficulty }}
- **Flowering Time:** {{ flowering_time }}
- **Yield:** {{ yield_description }}
- **Preferred Climate:** {{ preferred_climate }}

## Tips
- {{ tip_1 }}
- {{ tip_2 }}
- {{ tip_3 }}
