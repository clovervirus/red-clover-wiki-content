---
title: RUNBOOK
description:
published: true
date: 2025-10-25T12:18:10.378Z
tags:
editor: markdown
dateCreated: 2025-10-25T12:18:09.132Z
---

# Red Clover Wiki Runbook

## Sync Status Checklist

1. Open **Administration → Storage → Git** in Wiki.js.
2. Confirm the target shows **Status: Green** with last sync under 10 minutes.
3. If status is red:

   - Click **Purge Local Repository**.
   - Click **Import Everything**.
   - Click **Force Sync**.
   - Recheck status.

## Pushing Wiki Changes Back to GitHub

1. Make edits in Wiki.js and publish.
2. Wait for the scheduled sync or press **Force Sync**.
3. Verify a commit appears on GitHub authored by the Wiki sync user with your changes.

## Pulling GitHub Changes Into Wiki.js

1. Merge your PR to `main`.
2. In Wiki.js, visit **Storage → Git** and press **Force Sync**.
3. Inspect the updated page in the wiki to confirm content matches the commit.

## Calculator Embeds

1. Enable **Administration → Editor → Allow HTML**.
2. Edit the calculator page in `content/Calculators/` and embed with `<iframe>` or

   a div plus a global script.

3. Host custom widgets under `static/` or an external site if they require

   JavaScript frameworks.

## Backups

- Content is backed up via Git. Ensure sync status is green daily.
- For database backups, schedule a weekly `pg_dump` on the server and store files

  outside the repo (covered by the infrastructure runbook).

## Local Development

```bash
npm install
npx markdownlint-cli2 "**/*.md" "!node_modules" "!**/dist/**"
npx remark . --quiet --frail
npx linkinator content --recurse --silent --timeout=60000 --skip "^https?://"
```text

Run the commands before opening a PR to match CI.
