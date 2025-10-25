---
title: "{{ issue_title }}"
tags:
  - "{{ category_tag }}"
updated: "{{ updated | date('YYYY-MM-DD') }}"
---

# {{ issue_title }}

> **Scenario:** {{ scenario_summary }}

## Symptoms
- {{ symptom_1 }}
- {{ symptom_2 }}
- {{ symptom_3 }}

## Root Cause
{{ root_cause }}

## Resolution
1. {{ resolution_step_1 }}
2. {{ resolution_step_2 }}
3. {{ resolution_step_3 }}

## Verification
- {{ verification_check_1 }}
- {{ verification_check_2 }}

## Preventive Actions
- {{ prevention_tip_1 }}
- {{ prevention_tip_2 }}
