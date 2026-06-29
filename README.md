# Michael Hayk — Portfolio

Personal portfolio site showcasing projects, experience, education, and skills,
with an interactive reinforcement-learning demo and an AI-powered chat.

Live at **[michaelhayk.com](https://michaelhayk.com)**.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) · React 18 · TypeScript
- **[HeroUI](https://www.heroui.com/)** + **[Tailwind CSS](https://tailwindcss.com/)**
- **[Google Gemini](https://ai.google.dev/)** — powers the AskBox chat widget
- `next-sitemap` · Vercel Analytics & Speed Insights

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

The site runs without any configuration. The AskBox chat additionally needs a
free [Google Gemini API key](https://aistudio.google.com/apikey) — create a
`.env.local` file:

```bash
GEMINI_API_KEY=your_api_key
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint and auto-fix |
| `npm run next-sitemap` | Regenerate `sitemap.xml` / `robots.txt` |

## Features

- Portfolio sections: experience, projects, education, skills, contact
- `/rl` — interactive Q-learning grid-world dashboard
- AskBox — a floating chat assistant backed by the Gemini API
- Light/dark theme support
