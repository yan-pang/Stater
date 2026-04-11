# VIP Starter

`VIP Starter` is a standalone React prototype starter for document-driven product work. It is intentionally separate from the long-lived `Support` business repo so the two projects can evolve independently.

## What This Repo Is For

- Bootstrapping a new internal tool or prototype project
- Keeping a small reusable app shell and one generic sample module
- Keeping AI workflow prompts, templates, and collaboration rules in one place
- Serving as the source of truth for shared workflow updates before they are selectively copied into business repos

## What This Repo Is Not

- It is not the `Support` product repository
- It is not a long-lived business project
- It should not accumulate product-specific PRDs, delivery documents, or domain terminology over time

## Repository Layout

```text
docs/                Core human-facing docs
templates/           Reusable markdown templates and checklists
examples/minimal/    One generic sample spec that matches the sample app
specs/               Future internal feature specs
research/            Future background notes and discovery material
delivery/            Future external PRDs and test outputs
.claude/skills/      Primary AI workflow entrypoints
.cursor/rules/       Thin compatibility layer for Cursor
src/                 Minimal React starter app
```

## Core Docs

- [`docs/workflow.md`](/Users/centurygame/Desktop/VIP-Starter/docs/workflow.md)
- [`docs/starter-architecture.md`](/Users/centurygame/Desktop/VIP-Starter/docs/starter-architecture.md)
- [`docs/ai-collaboration.md`](/Users/centurygame/Desktop/VIP-Starter/docs/ai-collaboration.md)
- [`docs/delivery-checklist.md`](/Users/centurygame/Desktop/VIP-Starter/docs/delivery-checklist.md)

## Templates

- [`templates/feature-init.md`](/Users/centurygame/Desktop/VIP-Starter/templates/feature-init.md)
- [`templates/revamp-init.md`](/Users/centurygame/Desktop/VIP-Starter/templates/revamp-init.md)
- [`templates/product-design.md`](/Users/centurygame/Desktop/VIP-Starter/templates/product-design.md)
- [`templates/external-prd.md`](/Users/centurygame/Desktop/VIP-Starter/templates/external-prd.md)
- [`templates/test-strategy.md`](/Users/centurygame/Desktop/VIP-Starter/templates/test-strategy.md)
- [`templates/prd-checklist.md`](/Users/centurygame/Desktop/VIP-Starter/templates/prd-checklist.md)

## Quick Start

```bash
npm install
npm run dev
```

The sample app runs on `http://127.0.0.1:1219`.

## Reuse Flow

1. Start discovery in `research/` if the request is still fuzzy.
2. Create or update a spec in `specs/` with the templates in `templates/`.
3. Build the feature in `src/` after the spec is decision-complete.
4. Generate delivery docs into `delivery/` only when the project needs external handoff.
5. Keep shared workflow improvements in this repo first, then copy small pieces into business repos when needed.

## AI Workflow

- Primary entry: `.claude/skills/`
- Compatibility layer: `.cursor/rules/`
- Default collaboration model: one main assistant with optional specialist agents for design, build, or review

See [`docs/ai-collaboration.md`](/Users/centurygame/Desktop/VIP-Starter/docs/ai-collaboration.md) for the operating model.

## Recommended Entry Path

For humans:

1. Read `README.md`
2. Read [`docs/workflow.md`](/Users/centurygame/Desktop/VIP-Starter/docs/workflow.md)
3. Open the sample in [`examples/minimal/README.md`](/Users/centurygame/Desktop/VIP-Starter/examples/minimal/README.md)

For AI assistants:

1. Enter through `.claude/skills/`
2. Resolve behavior from `docs/workflow.md`
3. Only fall back to `.cursor/rules/` for compatibility

## Quality Gates

```bash
npm run lint
npm run build
npm run check
```

`npm run check` is the default local pre-push verification command.
