---
name: nothify
description: Generates a production-ready custom 404 page for any Next.js project. Detects App Router vs Pages Router, TypeScript vs JavaScript, and CSS framework automatically. Offers 6 design templates in light and dark variants. Optionally generates a matching error page. Triggers for "add a 404 page", "create not-found.tsx", "custom error page", or any Next.js project missing a 404 file.
user-invocable: false
---

# Nothify

A 404 page generator for Next.js. Reads the project, detects the stack, and writes a pixel-perfect `not-found` or `404` file that matches the project's exact configuration.

> **IMPORTANT:** Always read actual project files. Never guess or assume defaults for router type, language, or CSS framework.

## Detection

### Router

| Signal                          | Router                 | Target file           |
| ------------------------------- | ---------------------- | --------------------- |
| `app/` or `src/app/` exists     | App Router             | `app/not-found.{ext}` |
| `pages/` or `src/pages/` exists | Pages Router           | `pages/404.{ext}`     |
| Both exist                      | App Router (preferred) | `app/not-found.{ext}` |

### Language

Check in order, stop at first match:

1. `tsconfig.json` exists → TypeScript
2. Any `.ts`, `.tsx`, or `.mts` file in the project → TypeScript
3. `"typescript"` in `package.json` dependencies → TypeScript
4. None matched → JavaScript

Component files use `.tsx` / `.jsx`. Non-component files use `.ts` / `.js`.

### CSS Framework

Read `dependencies` and `devDependencies` from `package.json`, first match wins:

| Priority | Dependency                                 | Framework                   |
| -------- | ------------------------------------------ | --------------------------- |
| 1        | `@mui/material` or `@material-ui/core`     | `mui`                       |
| 2        | `tailwindcss`                              | `tailwind`                  |
| 3        | `styled-components`                        | `styled-components`         |
| 4        | `@emotion/react` (without `@mui/material`) | `emotion`                   |
| 5        | `bootstrap`                                | `bootstrap`                 |
| 6        | Any `.module.css` file in the project      | `css-modules`               |
| 7        | `styled-jsx` in dependencies               | `styled-jsx`                |
| 8        | None matched                               | `css` (plain inline styles) |

### Monorepo

If the root `package.json` has no `"next"` dependency, scan subdirectories for `next.config.{js,ts,mjs,cjs}`. Each directory containing one is a Next.js app. If multiple found, ask which to target. Use that sub-app's `package.json` for language and CSS framework detection. Prefix all output paths with the sub-app directory (e.g. `apps/web/app/not-found.tsx`).

### Existing 404 Check

Before generating, check if a 404 file already exists at the target path. If found, tell the user and ask before overwriting.

## Ask the User

Ask all three questions at once before generating anything.

**Template:** pick one of 6:

| Template      | Style                                                   |
| ------------- | ------------------------------------------------------- |
| `retro`       | Terminal window with blinking cursor animation          |
| `illustrated` | Full-bleed background with glassmorphism overlay        |
| `elegant`     | Refined layout with light typography and subtle spacing |
| `centered`    | Bold 404 heading, centered layout, single CTA button    |
| `minimal`     | Clean design with generous whitespace                   |
| `simple`      | Ultra-minimal, text only, maximum clarity               |

**Theme:** pick one:

1. **Match project:** detect existing color scheme and adapt the template
2. **Dark:** dark backgrounds, light text
3. **Light:** light backgrounds, dark text

**Error page:** also generate a matching `error.tsx` or `_error.tsx`?

## Templates

Read the template file from `templates/` before generating anything. It is the source of truth for layout, spacing, visual structure, and all text content.

```
templates/retro.jsx
templates/illustrated.jsx
templates/elegant.jsx
templates/centered.jsx
templates/minimal.jsx
templates/simple.jsx
```

Do not deviate from the template's layout, spacing, padding, gaps, font sizes, or visual hierarchy.

## Component Rules

### Router signatures

**App Router:** no props, no `getInitialProps`:

```jsx
export default function NotFound() {
  return ( ... )
}
```

**Pages Router:** standard page export:

```jsx
export default function Custom404() {
  return ( ... )
}
```

### Language

**TypeScript:** add type annotations. Use explicit return type `JSX.Element` or `React.FC` where appropriate.

**JavaScript:** no type annotations.

### CSS Frameworks

**tailwind:** use utility classes exactly as in the template. Do not rename, simplify, or replace any class.

**styled-components:** convert every `className` to a styled component. Add `import styled from 'styled-components'`. Keep all JSX structure identical.

**emotion:** use `@emotion/styled`. Add `import styled from '@emotion/styled'`. No MUI components.

**mui:** use `Box`, `Typography`, `Button`, `Container` with `sx` props. Always use hex values, never Tailwind tokens. For `retro`, set `fontFamily: 'monospace'` on the root container.

| Token                | Dark      | Light     |
| -------------------- | --------- | --------- |
| Page background      | `#0a0a0a` | `#f5f5f5` |
| Card / terminal body | `#030712` | `#ffffff` |
| Titlebar / footer    | `#111111` | `#e5e5e5` |
| Border               | `#262626` | `#d4d4d4` |
| Green text           | `#4ade80` | `#15803d` |
| Muted text           | `#525252` | `#a3a3a3` |
| Blue text            | `#60a5fa` | `#3b82f6` |
| Red text             | `#f87171` | `#ef4444` |

**bootstrap:** replace Tailwind utility classes with Bootstrap equivalents. Keep all JSX structure identical.

**css-modules:** produce two files: the component (importing from `.module.css`) and a separate `not-found.module.css` or `404.module.css` stylesheet.

**styled-jsx:** use `<style jsx>` inline tags. Write styles inside the tagged template literal.

**css (plain):** convert every Tailwind class to an inline `style` prop object on each element.

### Theme

**Match project:** scan for an existing theme system and use its tokens:

- Tailwind: read `tailwind.config.{js,ts}` and use `theme.colors` or `theme.extend.colors`
- CSS variables: look for `:root` in `globals.css` or `app/globals.css` and use `var(--background)`, `var(--foreground)`, etc.
- `next-themes`, shadcn/ui, or custom `ThemeProvider`: use already-defined CSS variables, never hardcode
- MUI: if a `theme.ts` or `theme.js` exists, import and apply it via `ThemeProvider`

Never hardcode a hex value that conflicts with an existing project token.

**Dark or Light:** hardcode all styles. No `theme` prop, no `useState`, no conditional logic.

### Non-negotiable rules

1. Reproduce the exact layout, spacing, padding, gaps, font sizes, and visual hierarchy from the template.
2. Adapt only the styling syntax to match the CSS framework. Nothing else changes.
3. Keep all text content exactly as written in the template.
4. Include all required imports at the top of the file.
5. Output only the component code. No comments, no explanations, no markdown fences.
6. Do not simplify, restructure, or improve the template layout.

## Output Paths

| Router       | Language   | Path                |
| ------------ | ---------- | ------------------- |
| App Router   | TypeScript | `app/not-found.tsx` |
| App Router   | JavaScript | `app/not-found.jsx` |
| Pages Router | TypeScript | `pages/404.tsx`     |
| Pages Router | JavaScript | `pages/404.jsx`     |

With `src/` prefix: `src/app/not-found.tsx` or `src/pages/404.tsx`.

With monorepo: prefix with sub-app path, e.g. `apps/web/app/not-found.tsx` or `packages/frontend/pages/404.jsx`.

## Error Page

Generate using the same template, theme, and CSS framework as the 404 page.

**App Router** (`app/error.{ext}`). Must include `"use client"` at the top:

```tsx
"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) { ... }
```

Show a generic error heading (e.g. "Something went wrong"). Include a "Try again" button that calls `reset()`.

**Pages Router** (`pages/_error.{ext}`):

```tsx
export default function CustomError({ statusCode }: { statusCode: number }) { ... }

CustomError.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
```

Show `statusCode` when available.

## Workflow

1. Read project files: detect router, language, and CSS framework.
2. Check if a 404 file already exists at the target path. Ask before overwriting.
3. Ask the user for template, theme, and whether to generate an error page.
4. Read the template file from `templates/`.
5. Adapt and write the component to the correct output path.
6. If requested, generate the matching error page using the same rules.
