# nothify

Agent skill for generating production-ready 404 pages in any Next.js project.

Detects your router, language, and CSS framework automatically. Writes the file to the correct path. No configuration required.

[![skills.sh](https://skills.sh/b/Abhivarde/nothify-skill)](https://skills.sh/Abhivarde/nothify-skill)

## Install

```bash
npx skills add AbhiVarde/nothify-skill
```

Works with Claude Code, Cursor, Codex, GitHub Copilot, Windsurf, and [50+ other agents](https://skills.sh/agent).

## Usage

Ask your agent:

```
Add a 404 page using the retro template, dark theme
```

```
Generate a custom not-found page for this project
```

```
Create a 404 and error page, minimal template, light theme
```

The skill reads your project files, detects the full stack, adapts the chosen template, and writes the file to the correct path. It asks before overwriting an existing 404.

## Templates

Each template ships in light and dark variants. Preview all at [nothify.abhivarde.in](https://nothify.abhivarde.in).

| Template | Style |
| --- | --- |
| `retro` | Terminal window with blinking cursor animation |
| `illustrated` | Full-bleed background with glassmorphism overlay |
| `elegant` | Refined layout with light typography and subtle spacing |
| `centered` | Bold 404 heading, centered layout, single CTA button |
| `minimal` | Clean design with generous whitespace |
| `simple` | Ultra-minimal, text only, maximum clarity |

## Detection

| What | How |
| --- | --- |
| Router | Scans for `app/` or `pages/` directory |
| Language | Checks `tsconfig.json`, `.ts`/`.tsx` files, `package.json` |
| CSS framework | Reads `package.json` dependencies in priority order |
| Monorepo | Scans for `next.config.*` in subdirectories |
| Existing 404 | Checks before writing, asks before overwriting |

## CSS Frameworks

Tailwind CSS, Material UI, styled-components, Emotion, Bootstrap, CSS Modules, styled-jsx, plain CSS.

## Repository

```
nothify-skill/
├── SKILL.md
└── templates/
    ├── retro.jsx
    ├── illustrated.jsx
    ├── elegant.jsx
    ├── centered.jsx
    ├── minimal.jsx
    └── simple.jsx
```

## License

[MIT](https://choosealicense.com/licenses/mit/). Built by [Abhi Varde](https://abhivarde.in).