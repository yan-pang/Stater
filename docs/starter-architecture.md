# Starter Architecture

## Intent

The app layer stays intentionally small:

- one navigation shell
- one generic table-driven sample module
- a few reusable list-page components
- a thin request utility

It is enough to launch a new project quickly, but small enough to replace once the real product direction becomes clear.

## Frontend Structure

```text
src/
  components/
    common/      Search, table, modal, pagination, action buttons
    layouts/     App shell, blank layout, table page layout
  router/        Route registration
  services/      Mock data for the sample module
  styles/        Global and component styles
  types/         Shared UI config types
  utils/         Thin request utility
  views/         Generic sample pages
```

## Default UI Boundaries

- `NavigationLayout`: app shell and primary nav
- `TablePageLayout`: title, description, search, actions, table, pagination
- `SearchBar`: declarative search field rendering
- `DataTable`: declarative column rendering and row actions
- `DialogWrapper`: modal shell for create/edit flows

## What To Customize First In A Real Project

1. Replace the generic sample pages in `src/views/`
2. Adjust theme tokens in `src/App.tsx` and `src/styles/global.scss`
3. Replace mock services with project-specific mock or real APIs
4. Add project-specific specs under `specs/`
5. Extend `.claude/skills/` only if the default six workflows stop being enough

## What Not To Do

- Do not keep old business modules around as "reference"
- Do not turn this starter into a second business repo
- Do not add a second full workflow definition outside `docs/workflow.md`
