---
title: How to Update the Wiki
description: Workflow for proposing, approving, and publishing documentation changes.
tags: [admin]
updated: 2025-10-25
---

## Submit a Change Request

1. Capture the need: reference the affected page (e.g., [[Feeding/Water-Source]]) and summarize the gap.
2. Open a ticket in Jira project **RC-WIKI** with the label `documentation` and include screenshots if applicable.
3. Assign the ticket to the Documentation Lead and note the due date in [[Data/Crop-Log]].

## Draft the Update

- Clone the repo per [[Admin/How-to-Update#repository-access]].
- Create a feature branch named `wiki/<ticket-number>`.
- Edit Markdown files locally, ensuring each new page includes `updated: 2025-10-25` and uses Wiki links.
- Run `npm run lint:content` before requesting review.

## Review and Publish

1. Open a pull request linking the Jira ticket; request review from at least one subject matter expert.
2. After approval, merge to `main`, then trigger the Wiki.js sync workflow.
3. Document completion in the originating Jira ticket and mention it during the next [[SOP/Daily#opening-0700|morning huddle]].

### Submit a Purchase Request

- Use Procurement form PF-12 when new tools or subscriptions are required for documentation work.
- Route the form to Finance for approval, then upload the signed copy to the Jira ticket.
- Update the equipment list in [[Inventory/Bench-Scale]] or other relevant pages once items arrive.

## Repository Access

- Keys live in the password manager entry **Wiki.js Git**.
- Access is limited to full-time staff and contract technical writers.
- Update this page whenever tooling or process changes by following the workflow above.
