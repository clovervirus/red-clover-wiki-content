---
title: README
description:
published: true
date: 2025-10-25T14:20:56.489Z
tags: 
editor: markdown
dateCreated: 2025-10-24T07:23:35.054Z
---

# Red Clover Wiki Content

Content for the Red Clover Wiki.js instance. All pages live under `content/`.
Edits merged into `main` sync down to Wiki.js via the Git storage integration;
changes made directly in the wiki sync back here automatically.

## Repository Layout

```text
content/               # Markdown pages that become wiki articles
templates/             # Front-matter templates for new content
static/images/         # Shared diagrams, photos, and embeds
.github/workflows/     # Automation for linting and link checking
```text

## Working With Content

1. Create or edit Markdown files in `content/` and open a pull request.

1. Confirm **Content CI** passes; fix lint or link issues if it fails.

1. After merge, run **Storage → Git → Force Sync** in Wiki.js to pull immediately, or wait for the scheduled sync.

1. For wiki-originated changes, verify the background sync pushed commits back to GitHub.

## Local Checks

```bash
npm install
npx markdownlint-cli2 "**/*.md" "!node_modules" "!**/dist/**"
npx remark . --quiet --frail
npx linkinator content --recurse --silent --timeout=60000 --skip "^https?://"
```text

Install tooling once per machine; subsequent runs only need the `npx` commands.
