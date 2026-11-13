# Agent Guide

## Project structure

- `frontend/`: SvelteKit 2, Svelte 5, TypeScript and Tailwind CSS 4. Follow the existing component patterns and reuse shared components.
- `strapi/`: Strapi 5 backend. Do not change its APIs or content models for frontend styling tasks.
- `.mise/tasks/frontend/`: frontend setup and development tasks.

## Environment and commands

Mise is the standard entry point for executing commands and longer workflows in this repository. Prefer existing mise tasks; for commands without a task, use `mise exec -- <command>`. Encode repeatable multi-step workflows as mise tasks rather than ad hoc shell sequences. Use mise to provision the Node.js 24 version declared in `mise.toml`. Verify `mise` is available before running commands. Mise manages both Node.js 24 and pnpm 10 through `mise.toml`. The frontend uses this mise-managed pnpm and its committed lockfile; do not rely on the system Corepack shim. Run `mise install` after cloning or changing tool versions.

From the repository root:

```sh
mise install
mise run frontend:setup
mise run frontend:dev
```

The setup task runs `pnpm install` in `frontend/`; the development task runs `pnpm run dev` there. From `frontend/`, run `mise exec -- pnpm check`, `mise exec -- pnpm lint`, and `mise exec -- pnpm build` for validation. Report existing failures separately from regressions. Do not rewrite unrelated files to fix existing lint failures.

## Coding conventions

Preserve existing layout, typography, translations and interactions when changing colors. Reuse shared cards, pills, navigation, drawer and footer components. Use the existing translation helpers for user-facing text. Preserve embedded game assets, images and PDFs.

## Color system

Reference: https://www.figma.com/design/8hnTkvoTYrVM7KYQe9vOaJ/Untitled?node-id=2-2

The ice-blue palette is based on the Figma design. Dark orange is a proposed companion palette reserved for future use.

| Token | Ice blue | Dark orange |
| --- | --- | --- |
| `canvas` | `#090D11` | `#120D0A` |
| `surface` | `#111920` | `#1C1410` |
| `elevated` | `#111C25` | `#271B14` |
| `content` | `#E8EDF1` | `#F3EBE5` |
| `muted` | `#A5B3BF` | `#BCA99B` |
| `line` | `#29343E` | `#493326` |
| `accent` | `#B9E4FC` | `#E88A4A` |
| `accent-hover` | `#C8E8FC` | `#F3A56C` |
| `on-accent` | `#0A141C` | `#1C1008` |

Colors are defined in `frontend/src/app.css` using Tailwind 4 `@theme`. Use semantic utilities such as `bg-canvas`, `bg-surface`, `text-content`, `text-muted`, `text-accent`, and `border-line`. Both named palettes are also available as utilities, for example `bg-ice-blue-surface` and `text-dark-orange-accent`. Use opacity modifiers for decorative overlays when appropriate. Avoid new hardcoded colors in components.

Ice blue is the default throughout the frontend. `.palette-dark-orange` is available for future content sections but must not be applied in this initial implementation. Future dark-orange sections must not recolor the header, drawer or footer. Do not introduce a theme selector or persisted theme preference without a separate request.

## Validation

Run frontend type checks, lint and build through mise using Node.js 24. Review all routes on desktop and mobile, including navigation drawer, locale selection, project cards, loading states, carousel and game controls. Check text contrast, hover and keyboard focus states. Game rendering inside embedded frames is outside the palette migration. Confirm that dark orange remains unused and all documentation in this file stays in English.

## Content container

Use the shared `site-container` Tailwind utility for horizontal alignment of the header, main site layout and footer. It is full width up to 1264px, centered with 16px horizontal padding below 640px and 24px from 640px upward. Apply it once per layout region; page wrappers must not add duplicate horizontal padding. Preserve internal card, list and bordered-block spacing. Saudades and game routes retain their separate layouts and are excluded from this container migration. Do not apply this utility to the root layout.
