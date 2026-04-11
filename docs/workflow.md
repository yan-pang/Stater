# Workflow

This starter uses a compact document-driven workflow. The goal is to keep one stable path that works in Claude, Codex, and Cursor without maintaining three different process documents.

## Entry Order

- Human entry: `README.md` -> `docs/workflow.md` -> `examples/minimal/`
- AI entry: `.claude/skills/*` -> `docs/workflow.md` -> the target file in `research/`, `specs/`, or `delivery/`
- Cursor is compatibility-only and should not define a separate process

## Default Flow

1. `breakdown`
   Turn a fuzzy idea into a bounded feature scope and a small terminology list.
2. `design`
   Create or update `specs/<feature>.md` from the templates in `templates/`.
3. `build`
   Implement the feature only after the spec is decision-complete.
4. `deliver`
   Generate `delivery/` artifacts only when external handoff is needed.
5. `review`
   Check product quality, implementation coverage, and starter gaps.
6. `status`
   Summarize current progress and recommend the next concrete action.

## Bootstrap Helper

Use the local scaffold command when starting a fresh topic:

```bash
npm run new:spec -- <feature-name>
```

Optional flags:

- `--type revamp`
- `--delivery`

## Directory Contract

- `research/`: raw notes, meeting output, discovery materials
- `specs/`: internal design specs used to drive implementation
- `delivery/`: external PRDs, test strategies, and review-ready docs
- `examples/minimal/`: one canonical generic example for onboarding

## File Naming

- Internal specs: `specs/<feature-name>.md`
- External PRDs: `delivery/<feature-name>_prd.md`
- Test strategy: `delivery/<feature-name>_test-strategy.md`
- Background notes: `research/<feature-name>.md`

Use ASCII file names. Keep document content in Chinese or bilingual as needed.

## Decision Rules

- If requirements are fuzzy, do not code first. Start with `breakdown`.
- If a request is small and local, update the spec and code directly without inventing extra process.
- If the project is still internal-only, skip `deliver`.
- If the task is broad but still sequential, keep one main assistant.
- Only pull in specialist agents when the subtask is bounded and can run in parallel without fragmenting decisions.

## Single Source Of Truth

Workflow behavior should be defined here and reused by:

- `.claude/skills/`
- `.cursor/rules/`
- future business repos that copy pieces of this starter

Do not duplicate full process definitions across multiple files.
