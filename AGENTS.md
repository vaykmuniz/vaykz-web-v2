# Agent Guide

## Project structure

- `frontend/`: SvelteKit 2, Svelte 5, TypeScript and Tailwind CSS 4. Follow the existing component patterns and reuse shared components.
- `strapi/`: Strapi 5 backend. Do not change its APIs or content models for frontend styling tasks.
- `.mise/tasks/frontend/`: frontend setup and development tasks.

## Pages and content

- `frontend/src/routes/(site)/` shares the main site layout; `(site)` is not part of URLs. Saudades and games have separate layouts.
- Software contains work experience and software/AI skills; Automation contains education, research and automation skills. `/skills` only redirects permanently to `/software` and is not listed in navigation.
- Edit experience order, companies, stacks and translation keys in `frontend/src/routes/(site)/software/experience.const.ts`; edit skill groups in `frontend/src/lib/skills.const.ts`. Shared skills may appear in both areas.
- User-facing copy lives in `frontend/src/lib/i18n/translations.const.ts`. Use the existing translation helpers and update all three locales: `en`, `es` and `br` (Brazilian Portuguese).
- Projects combines static selected contributions defined in its page with GitHub repositories fetched for `vaykmuniz` using the `project` topic.

Do not invent skills, dates or results. Preserve the freelance nature of the EBANX experience. Read current content from its source rather than duplicating it here. Do not update the résumé PDF unless requested; site content changes do not update it automatically.

## Environment and commands

Use mise for commands and workflows, preferring existing tasks; otherwise use `mise exec -- <command>`. Verify mise is available. `mise.toml` manages Node.js 24 and pnpm 10; use its pnpm and the committed lockfile, not the system Corepack shim. Run `mise install` after cloning or changing tool versions. Encode repeatable multi-step workflows as mise tasks.

From the repository root:

```sh
mise install
mise run frontend:setup
mise run frontend:dev
```

Setup runs `pnpm install` in `frontend/`; dev runs `pnpm run dev` there. From `frontend/`, validation commands are `mise exec -- pnpm check`, `mise exec -- pnpm lint` and `mise exec -- pnpm build`.

## Coding conventions

Preserve layout, typography, translations and interactions when changing colors. Reuse existing shared components. Preserve embedded game assets, images and PDFs. `.svelte-kit/` is generated: do not edit it manually or commit incidental changes, even where files are already tracked. Stage only task-related files and use semantic commit messages.

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

Ice blue is the default throughout the frontend. `.palette-dark-orange` is available for future content sections but must not be activated without an explicit request. Future dark-orange sections must not recolor the header, drawer or footer. Do not introduce a theme selector or persisted theme preference without a separate request.

## Validation

Scale validation to the change: use targeted review for copy and styling, type checks for Svelte/TypeScript changes, and builds for configuration, dependency, integration or release changes. Do not repeat full builds for small adjustments. Run checks through mise with Node.js 24; report pre-existing failures separately and do not rewrite unrelated files to fix them.

Review affected pages on desktop and mobile, expanding coverage when shared behavior changes. Check relevant navigation, locale selection, cards, loading/error states, carousels, keyboard focus and contrast. Preserve embedded game behavior; game rendering inside frames is outside site palette changes. Keep dark orange unused until requested and this guide entirely in English.

## Content container

Use the shared `site-container` Tailwind utility for horizontal alignment of the header, main site layout and footer. It is full width up to 1264px, centered with 16px horizontal padding below 640px and 24px from 640px upward. Apply it once per layout region; page wrappers must not add duplicate horizontal padding. Preserve internal card, list and bordered-block spacing. Saudades and game routes retain their separate layouts and are excluded from this container convention. Do not apply this utility to the root layout.
