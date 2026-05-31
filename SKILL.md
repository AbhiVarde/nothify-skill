---
name: nothify-404
description: Generate a production-ready custom 404 page for any Next.js project. Auto-detects App Router vs Pages Router, TypeScript vs JavaScript, and CSS framework (Tailwind, MUI, styled-components, emotion, Bootstrap, CSS Modules, styled-jsx, plain CSS). Supports monorepos (Turborepo, Nx, pnpm workspaces). Offers 6 design templates (retro, illustrated, elegant, centered, minimal, simple) in light and dark variants. Optionally generates a matching error page. Live web version at nothify.abhivarde.in.
---

# Nothify — Custom 404 Page Generator

Generate a pixel-perfect, production-ready 404 page that matches a Next.js project's exact configuration. Read the project files, detect the stack, ask the user for their preferences, adapt the chosen template, and write the file to the correct path.

## Trigger Conditions

Use this skill when the user asks to:

- Add a custom 404 page to a Next.js project
- Create `not-found.tsx`, `not-found.jsx`, `404.tsx`, or `404.jsx`
- Replace or overwrite an existing 404 page
- Generate a matching `error.tsx` or `_error.tsx`

## Step 1 — Detect Project Configuration

Read the actual project files. Never guess or assume defaults.

### 1a. Router Type

- `app/` or `src/app/` directory exists → App Router → target file: `app/not-found.{ext}`
- `pages/` or `src/pages/` directory exists → Pages Router → target file: `pages/404.{ext}`
- Both exist → prefer App Router

### 1b. Language

Check in this exact order:

1. `tsconfig.json` exists → TypeScript
2. Any `.ts`, `.tsx`, or `.mts` file exists in the project → TypeScript
3. `package.json` has `"typescript"` in `dependencies` or `devDependencies` → TypeScript
4. None matched → JavaScript

### 1c. File Extension

| Language   | Component file | Non-component file |
| ---------- | -------------- | ------------------ |
| TypeScript | `.tsx`         | `.ts`              |
| JavaScript | `.jsx`         | `.js`              |

### 1d. CSS Framework

Read `dependencies` and `devDependencies` from `package.json`. Check in this exact priority order:

1. `@mui/material` or `@material-ui/core` → **mui**
2. `tailwindcss` → **tailwind**
3. `styled-components` → **styled-components**
4. `@emotion/react` (without `@mui/material`) → **emotion**
5. `bootstrap` → **bootstrap**
6. Any `.module.css` file in the project → **css-modules**
7. `styled-jsx` in dependencies → **styled-jsx**
8. None matched → **css** (plain inline styles)

### 1e. Monorepo Detection

If the root `package.json` does not have `"next"` in its dependencies:

1. Scan subdirectories for `next.config.js`, `next.config.ts`, `next.config.mjs`, or `next.config.cjs`
2. Each directory containing one of these files is a Next.js app
3. If multiple are found, ask the user which sub-app to target
4. Use that sub-app's own `package.json` for language and CSS framework detection
5. Prefix all output paths with the sub-app path (e.g., `apps/web/app/not-found.tsx`)

### 1f. Existing 404 Check

Before generating anything, check if a 404 file already exists:

- App Router: `app/not-found.{js,jsx,ts,tsx}` or `src/app/not-found.{js,jsx,ts,tsx}`
- Pages Router: `pages/404.{js,jsx,ts,tsx}` or `src/pages/404.{js,jsx,ts,tsx}`

If found, tell the user and ask before overwriting.

## Step 2 — Ask for Template, Theme, and Error Page

Ask the user three questions before generating anything. Keep it conversational and ask all three at once.

### Template

Ask the user to pick one of these 6 templates:

| Template      | Style                                                   |
| ------------- | ------------------------------------------------------- |
| `retro`       | Terminal window with blinking cursor animation          |
| `illustrated` | Full-bleed background image with glassmorphism overlay  |
| `elegant`     | Refined layout with light typography and subtle spacing |
| `centered`    | Bold 404 heading, centered layout, single CTA button    |
| `minimal`     | Clean design with generous whitespace                   |
| `simple`      | Ultra-minimal, text only, maximum clarity               |

### Theme

Ask the user which of these three options they prefer:

1. **Match project theme** — detect the project's existing color scheme and adapt the template to use those exact colors and tokens
2. **Dark** — hardcode dark backgrounds with light text
3. **Light** — hardcode light backgrounds with dark text

If the user picks option 1, follow the project theme detection rules in Step 4.

### Error Page

Ask if they also want a matching `error.tsx` or `_error.tsx` generated alongside the 404 page.

## Step 3 — Read the Template File

Read the corresponding file from the `templates/` directory in this repository:

- `templates/retro.jsx`
- `templates/illustrated.jsx`
- `templates/elegant.jsx`
- `templates/centered.jsx`
- `templates/minimal.jsx`
- `templates/simple.jsx`

This file is the source of truth for layout, spacing, visual structure, and all text content. Do not deviate from it.

## Step 4 — Generate the Component

### Router Adaptation

**App Router:**

```jsx
export default function NotFound() {
  return ( ... )
}
```

No props. No `getInitialProps`. No metadata export unless the project already uses one.

**Pages Router:**

```jsx
export default function Custom404() {
  return ( ... )
}
```

Standard Next.js page export. No `getInitialProps` needed.

### Language Adaptation

**TypeScript:** Add proper type annotations. Use explicit return type `JSX.Element` or `React.FC` where appropriate.

**JavaScript:** No type annotations at all.

### CSS Framework Adaptation

#### tailwind

Use Tailwind utility classes exactly as they appear in the template. Do not rename, simplify, or replace any class.

#### styled-components

Convert every `className` to a styled component. Add `import styled from 'styled-components'` at the top. Keep all structural JSX identical.

#### emotion

Convert to `@emotion/styled`. Add `import styled from '@emotion/styled'` at the top. Do not use any Material-UI components.

#### mui

Use `@mui/material` components (`Box`, `Typography`, `Button`, `Container`). Apply all styles via the `sx` prop. Never use Tailwind color tokens in sx props. Always use real hex values.

Dark theme hex reference:

- Page background: `#0a0a0a`
- Terminal or card body: `#030712`
- Titlebar and footer: `#111111`
- Border: `#262626`
- Green text: `#4ade80`
- Muted text: `#525252`
- Blue text: `#60a5fa`
- Red text: `#f87171`

Light theme hex reference:

- Page background: `#f5f5f5`
- Terminal or card body: `#ffffff`
- Titlebar and footer: `#e5e5e5`
- Border: `#d4d4d4`
- Green text: `#15803d`
- Muted text: `#a3a3a3`
- Blue text: `#3b82f6`
- Red text: `#ef4444`

For the retro template, set `fontFamily: 'monospace'` on the root container.

#### bootstrap

Replace Tailwind utility classes with Bootstrap equivalents. Keep all JSX structure and layout identical.

#### css-modules

Produce two files:

1. The component file importing styles from a `.module.css` file
2. A separate `.module.css` file with all style definitions

Name the CSS file to match the component: `not-found.module.css` or `404.module.css`.

#### styled-jsx

Use Next.js `<style jsx>` inline tags. Keep all component structure intact. Write styles inside the tagged template literal.

#### css (plain)

Convert every Tailwind class to an inline `style` prop object. Every styled element receives an explicit `style={{ ... }}` with the equivalent CSS properties and values.

### Theme Adaptation

#### Option 1 — Match project theme

Scan the project for an existing theme system:

- **Tailwind:** read `tailwind.config.js` or `tailwind.config.ts` and use the `theme.colors` or `theme.extend.colors` values
- **CSS variables:** look for `:root` declarations in `globals.css`, `app/globals.css`, or any global stylesheet and use those variable names (e.g., `var(--background)`, `var(--foreground)`)
- **Theme provider:** if the project uses `next-themes`, shadcn/ui, or a custom `ThemeProvider`, use CSS variables already defined in the project rather than hardcoding any color
- **MUI theme:** if a custom MUI theme is defined in a `theme.ts` or `theme.js` file, import and use it via `ThemeProvider`

When matching the project theme, the component should use the project's own color tokens wherever possible. Do not hardcode any hex value that conflicts with an existing token.

#### Option 2 or 3 — Dark or light

Hardcode all styles for the chosen theme. The component must accept no props.

- Do not add a `theme` prop
- Do not use `useState` for theme toggling
- Do not add any conditional theme logic
- **dark:** dark backgrounds, light text, as shown in the template's dark variant
- **light:** light backgrounds, dark text, as shown in the template's light variant

### Non-Negotiable Rules

1. Reproduce the exact layout, spacing, padding, gaps, font sizes, and visual hierarchy from the template
2. Adapt only the styling syntax to match the CSS framework — nothing else changes
3. Keep all text content exactly as written in the template
4. Include all required imports at the top of the file
5. Output only the component code — no comments, no explanations, no markdown fences
6. Do not simplify, restructure, or improve the template layout

## Step 5 — Write the File

### Standard project

| Router       | Language   | Output path         |
| ------------ | ---------- | ------------------- |
| App Router   | TypeScript | `app/not-found.tsx` |
| App Router   | JavaScript | `app/not-found.jsx` |
| Pages Router | TypeScript | `pages/404.tsx`     |
| Pages Router | JavaScript | `pages/404.jsx`     |

If the project uses a `src/` prefix:

```
src/app/not-found.tsx
src/pages/404.tsx
```

### Monorepo

Prefix the output path with the selected sub-app directory:

```
apps/web/app/not-found.tsx
packages/frontend/pages/404.jsx
```

Write the file. If a file already existed and the user confirmed the overwrite, replace it entirely.

## Step 6 (Optional) — Generate a Matching Error Page

If the user confirmed they want an error page, generate it using the same template style, theme, and CSS framework.

### App Router (`app/error.{ext}`)

Must include the `"use client"` directive at the top.

TypeScript:

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

JavaScript:

```jsx
"use client"

export default function Error({ error, reset }) { ... }
```

Show a generic error heading such as "Something went wrong". Include a "Try again" button that calls `reset()`.

### Pages Router (`pages/_error.{ext}`)

TypeScript:

```tsx
export default function CustomError({ statusCode }: { statusCode: number }) { ... }

CustomError.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
```

JavaScript:

```jsx
export default function CustomError({ statusCode }) { ... }

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
```

Show the `statusCode` if available. Apply the same CSS framework and theme rules as the 404 page.
