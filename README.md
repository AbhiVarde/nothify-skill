# nothify-404

An agent skill for generating production-ready custom 404 pages in any Next.js project.

Install this skill into your AI coding agent and it will automatically detect your project's router, language, and CSS framework, then generate a pixel-perfect 404 page in the correct file at the correct path. No configuration required.

Live web version at [nothify.abhivarde.in](https://nothify.abhivarde.in).

[![skills.sh](https://skills.sh/b/AbhiVarde/nothify-skill)](https://skills.sh/AbhiVarde/nothify-skill)

## Install

```bash
npx skills add AbhiVarde/nothify-skill
```

Works with Claude Code, Cursor, Codex, GitHub Copilot, Windsurf, and [50+ other agents](https://skills.sh/agent).

## What It Does

Once installed, ask your agent to add a 404 page to any Next.js project. The skill handles everything:

- Detects App Router vs Pages Router
- Detects TypeScript vs JavaScript
- Detects your CSS framework automatically
- Supports monorepos with multiple Next.js apps
- Asks before overwriting an existing 404 page
- Writes the file to the correct path

## Templates

Six professionally designed templates, each available in light and dark variants.

| Template    | Style                                                   |
| ----------- | ------------------------------------------------------- |
| retro       | Terminal window with blinking cursor animation          |
| illustrated | Full-bleed background image with glassmorphism overlay  |
| elegant     | Refined layout with light typography and subtle spacing |
| centered    | Bold 404 heading, centered layout, single CTA button    |
| minimal     | Clean design with generous whitespace                   |
| simple      | Ultra-minimal, text only, maximum clarity               |

Preview all templates at [nothify.abhivarde.in](https://nothify.abhivarde.in).

## CSS Framework Support

The skill adapts output to match your project's styling approach with no extra steps.

| Framework         | Supported |
| ----------------- | --------- |
| Tailwind CSS      | Yes       |
| Material-UI (MUI) | Yes       |
| styled-components | Yes       |
| Emotion           | Yes       |
| Bootstrap         | Yes       |
| CSS Modules       | Yes       |
| styled-jsx        | Yes       |
| Plain CSS         | Yes       |

## Next.js Support

| Feature                                    | Supported |
| ------------------------------------------ | --------- |
| App Router                                 | Yes       |
| Pages Router                               | Yes       |
| TypeScript                                 | Yes       |
| JavaScript                                 | Yes       |
| Monorepos (Turborepo, Nx, pnpm workspaces) | Yes       |
| `src/` directory structure                 | Yes       |
| Optional `error.tsx` generation            | Yes       |

## Usage

After installing the skill, open any Next.js project in your agent and ask:

```
Add a 404 page using the retro template, dark theme
```

```
Generate a custom not-found page for this project
```

```
Create a 404 page and a matching error page, minimal template, light theme
```

The agent reads your project files, detects the stack, adapts the template, and writes the file.

## Web Version

Prefer a no-code workflow? Use the web app at [nothify.abhivarde.in](https://nothify.abhivarde.in).

The web version supports the same detection and generation pipeline, plus live code preview, direct GitHub PR creation, and automatic forking for repos you do not own.

## Repository Structure

```
nothify-skill/
├── SKILL.md           # Skill instructions read by the agent
└── templates/
    ├── retro.jsx
    ├── illustrated.jsx
    ├── elegant.jsx
    ├── centered.jsx
    ├── minimal.jsx
    └── simple.jsx
```

## License

MIT. Built by [Abhi Varde](https://abhivarde.in).