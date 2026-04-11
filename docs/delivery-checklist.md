# Delivery Checklist

Use this before handing the repo or a feature branch to another engineer, PM, or reviewer.

## Repo Health

- `README.md` still matches the current repo purpose
- no stale business terms remain in docs, routes, or sample data
- no broken links to deleted workflow files or old agent paths remain
- new workflow guidance is in `docs/`, not duplicated elsewhere

## Spec Quality

- the feature goal and scope are explicit
- assumptions and defaults are written down
- key user flows and edge cases are covered
- implementation does not require the next engineer to invent policy

## App Quality

- `npm run build` passes
- `npm run lint` passes
- the sample or changed page can be opened and used
- mock data still supports the intended demo flow

## Handoff Output

- internal spec is in `specs/`
- external PRD exists in `delivery/` only if needed
- test strategy exists in `delivery/` only if needed
- review notes point to concrete files and behaviors

## Git Hygiene

- Support and Starter changes are not mixed in one repo
- branch name follows the repo convention
- tags use the repo-specific prefix when a baseline or release is needed
