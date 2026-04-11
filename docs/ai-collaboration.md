# AI Collaboration

## Default Mode

Use one main assistant as the owner of context, decisions, and final output.

That main assistant should:

- read the relevant spec and starter docs first
- decide the next concrete step
- only delegate bounded, non-overlapping subtasks
- integrate the results and keep the final answer coherent

## When To Use Agents

Bring in a specialist agent only when all of the following are true:

- the subtask is well scoped
- it can run in parallel
- it will not force the user to make duplicate decisions
- the main assistant is not blocked on doing that same work locally

## Recommended Specialist Roles

- `design-agent`
  Drafts or restructures a feature spec once the goal is already clear
- `build-agent`
  Implements a bounded UI slice or a small module with a clear file ownership
- `review-agent`
  Checks doc consistency, design coverage, dead references, and handoff quality

## When Not To Use Agents

- early discovery with lots of ambiguity
- small edits
- tightly coupled refactors
- any task where the next step depends immediately on the result

## Repo Ownership Rule

This starter owns the shared workflow by default.

Business repos should copy small, stable pieces from here when needed instead of trying to co-maintain a mirrored workflow in both directions.

## Platform Rule

- Claude/Codex: primary workflow path through `.claude/skills/`
- Cursor: compatibility path through `.cursor/rules/`

The docs in `docs/` stay authoritative for both.
