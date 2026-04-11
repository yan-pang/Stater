---
name: design
description: Use when a feature already has enough context to become a decision-complete internal spec.
argument-hint: [feature-name]
---

# /design

1. Read `docs/workflow.md` and `docs/ai-collaboration.md`.
2. Start from `templates/product-design.md`.
3. Prefer `npm run new:spec -- <feature-name>` first if the target files do not exist yet.
4. Pull supporting material from `research/<feature-name>.md` if it exists.
5. Produce or update `specs/<feature-name>.md`.
6. Record assumptions, edge cases, and acceptance criteria explicitly.
