# Ashish Sahoo — Portfolio

A Next.js 16 + TypeScript + Tailwind CSS portfolio, built in an Aceternity-UI-inspired
dark "terminal" style: a typed-out terminal hero, a mouse-tracking spotlight glow,
a bento grid for skills, a git-log-style experience timeline, and hover-glow
project cards.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit your content

Everything — name, bio, skills, experience, projects, education, certifications,
links — lives in one file:

```
src/data/resume.ts
```

Edit that file and the whole site updates. Two things to update before you ship it:

- `profile.github` and `profile.linkedin` are placeholders (`#`) — set them to
  your real profile URLs.
- `projects[].liveUrl` / `projects[].codeUrl` are placeholders — point them at
  your deployed demos and GitHub repos.

## Structure

```
src/
  app/            root layout, global styles, page assembly
  components/     one file per section (hero, skills, experience, projects, ...)
  data/resume.ts  all content — the only file you usually need to touch
  lib/utils.ts    small className-merging helper
```

## Deploy

This is a standard Next.js app — deploys cleanly to Vercel:

```bash
npx vercel
```

or any host that supports Next.js (Render, Railway, your own Node server via
`npm run build && npm run start`).
