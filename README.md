# Red Clover Wiki — Content Repo

## Purpose
This repository stores the Markdown source for the Red Clover Wiki. Wiki.js mirrors the
`content/` directory to power the live site, so updates made here are picked up by the
Wiki.js Git sync service and deployed to the wiki after the next synchronization cycle.
Admins can also trigger a manual sync from Wiki.js when urgent changes land.

## Expected directory layout
All user-editable articles live under `content/`. Keep the following structure in mind
when adding or reorganizing files:

| Path | Description |
| ---- | ----------- |
| `content/home.md` | Landing page for the wiki home node. |
| `content/grow-guides/` | Articles grouped by guide type (seedlings, nutrients, troubleshooting, etc.). |
| `content/grow-journals/` | Individual cultivation journals. |
| `content/pests-diseases/` | Identification and treatment write-ups. |
| `content/strains/` | One page per strain profile. |
| `content/terpenes/` | Terpene reference articles. |
| `content/_includes/` | Reusable partials (callouts, tables) that can be embedded with `@import`. |
| `content/_assets/` | Static assets (images, downloadable PDFs). Organize by topic inside this folder. |
| `content/_calculators/` | JSON or Markdown calculators consumed by Wiki.js calculator modules. |
| `_templates/` | Markdown templates editors can copy when creating new pages. |

Add new top-level sections sparingly and coordinate with Wiki.js admins so that navigation
and permissions stay consistent.

## Wiki.js ↔ GitHub sync flow
1. Editors commit and push changes to GitHub (usually to `main`).
2. Wiki.js polls the Git repository on its configured schedule, fetching new commits.
3. During each sync cycle Wiki.js applies Git changes into its internal database.
4. When authors edit content directly inside Wiki.js, the platform writes those updates
   back to the Git repo so both sides stay in lockstep. Resolve conflicts in Git first,
   then trigger a manual sync if necessary (`Administration → Git → Synchronize → Force`).

## Backup and rollback checklist
Before major edits:
1. Clone the repo locally and create a dated backup branch:
   ```bash
   git checkout main
   git pull
   git checkout -b backup/$(date +%Y-%m-%d)
   ```
2. Commit work-in-progress changes to that branch before opening a pull request.

If you need to revert:
1. Identify the last known-good commit and create a recovery branch:
   ```bash
   git checkout -b restore/<ticket>
   git revert <bad_commit_sha>
   ```
2. Merge the revert branch to `main` through the usual review process.
3. In Wiki.js, open **Administration → Git → Synchronize** and select **Force pull** to
   overwrite the wiki database with the reverted Git state.
4. If Wiki.js edits accidentally clobbered Git history, you can push a known-good commit
   with `git push --force-with-lease origin main` (coordinate with the team first), then
   run **Force pull** again in Wiki.js to realign the database.

## Navigation and template guidance
* Navigation entries are managed inside Wiki.js under **Navigation → Primary**. After
  adding or renaming files in `content/`, coordinate with an admin to update the menu so
  links stay accurate.
* Use the Markdown files in `_templates/` whenever you create a new strain profile,
  journal, terpene entry, or pest/disease article. Copy the relevant template into the
  appropriate `content/` subfolder, then replace placeholder fields before committing.
* Shared snippets (callouts, warnings, reusable tables) belong in `content/_includes/` so
  editors can embed them with `@import` tags rather than duplicating copy.
