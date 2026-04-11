# Project Catalog Sample Spec

## Summary

- Goal: provide one generic list page that demonstrates how the starter handles search, table actions, pagination, and edit dialogs
- Success criteria: a new project can reuse this structure without pulling in old business terminology
- Assumptions: all data is mock data and all actions stay local to the browser

## Page Inventory

| Page | Route | Purpose |
| --- | --- | --- |
| Project Catalog | `/catalog` | browse and edit starter-friendly project records |
| Workflow Guide | `/workflow` | explain how the starter is intended to be used |

## Interaction Rules

| Trigger | System behavior | Exception handling |
| --- | --- | --- |
| Search | filter the local project list and reset to page 1 | empty results show an empty table |
| New Project | open a dialog with default status | required fields block save |
| Edit | open a dialog with row data | invalid fields block save |
| Duplicate | create a copy with a new id and a copied name suffix | duplicate stays on the current filtered list if it still matches |

## Acceptance

- table renders without Support-specific names
- dialog flow works with local mock data
- workflow page points users to the starter docs instead of old business docs
