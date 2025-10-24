# Red Clover Wiki — Content Repo

This repo syncs with Wiki.js (bi-directional). With **Always use locale namespace** enabled, pages live in `content/en/...`.

## Expected layout
- `content/en/strains/...`
- `content/en/grow-guides/...`
- `content/en/grow-journals/...`
- `content/en/terpenes/...`
- `content/en/pests-diseases/...`
- `content/en/calculators/...`
- `_templates/` reusable page templates
- `_includes/` shared snippets (callouts, tables) embedded with `@import`

## Sync flow
- Edits in GitHub → **Force Sync** in Wiki.js (Storage → Git) to pull immediately.
- Edits in Wiki.js → auto-commit to this repo on schedule; use **Force Sync** if you want it now.

## Navigation checklist
Update **Administration → Navigation → Primary** in Wiki.js after adding sections. Recommended entries:

1. Strains → `/en/strains`
2. Grow Guides → `/en/grow-guides`
3. Grow Journals → `/en/grow-journals`
4. Terpenes → `/en/terpenes`
5. Pests & Diseases → `/en/pests-diseases`
6. Calculators → `/en/calculators`

## Embed calculators
Pick the option that fits your workflow:

### Option A — HTML page (quickest)
1. Create a page under Calculators with **Editor = HTML**.
2. Paste the HTML+JS for your tool.
3. If scripts are stripped, enable **Administration → Rendering → Markdown → Allow unsafe HTML**, or place scripts in **Administration → Theme → Custom Scripts**.

### Option B — Global script + Markdown container
1. Add your JavaScript under **Administration → Theme → Custom Scripts (footer)**.
2. On the Markdown page, include a wrapper like `<div id="calc-vpd"></div>` and initialize the calculator from the global script.

### Option C — External host + iframe (safest sandbox)
Serve the calculator on GitHub Pages/Netlify and embed:

```html
<iframe src="https://YOUR-USERNAME.github.io/YOUR-CALC/" width="100%" height="820" loading="lazy"></iframe>
```

## Troubleshooting
- **Git target red?** Verify the repository URL (`https://github.com/clovervirus/red-clover-wiki-content.git`), PAT permissions, and that **Authentication Type = BASIC**. Use **Purge Local Repository** then **Force Sync** if histories diverge.
- **Pages missing?** Confirm files live under `content/en/...`, run **Force Sync**, then **Administration → Maintenance → Rebuild Search Index**.
- **Conflicts from Wiki edits?** Revert the bad commit here, then **Force Sync** so Wiki.js re-imports the clean history.

## Rollback
If a bad commit breaks content, revert it in GitHub (or restore from backup), then in Wiki.js run **Force Sync** so the wiki database matches the reverted commit.
