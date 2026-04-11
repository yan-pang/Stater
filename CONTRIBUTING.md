# Contributing

## Repo Intent

This repository is the shared starter baseline, not a business project.

Changes here should improve one of these areas:

- reusable app shell quality
- templates and workflow clarity
- AI collaboration entrypoints
- repo-level engineering guardrails

Avoid adding product-specific vocabulary or long-lived business documents.

## Branch Naming

- `feature/<topic>`
- `fix/<topic>`
- `docs/<topic>`
- `chore/<topic>`

Keep each branch focused on one change area.

## Local Checks

Before opening a PR, run:

```bash
npm run check
```

If you change templates or workflow docs, also confirm:

- `README.md`
- `docs/workflow.md`
- `.claude/skills/`
- `.cursor/rules/`

still point to the same process.

## Starter Change Rules

- Update `docs/` before expanding `.claude/skills/` or `.cursor/rules/`
- Prefer the smallest useful change
- Keep file names ASCII
- Keep sample app terminology generic

## Pull Requests

PRs should explain:

- what starter capability improved
- whether docs, AI workflow, and code were kept in sync
- how the change was verified
