# 🌿 Agrovia Platform Guide

Interactive step-by-step guide for the Agrovia farm-to-consumer supply chain platform.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `/dist` — deploy this folder to GitHub Pages or Netlify.

## Deploy to Netlify
1. Push this repo to GitHub
2. Connect to Netlify → Build command: `npm run build` → Publish dir: `dist`

## Deploy to GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Tech Stack
- React 18 + Vite 5
- CSS Modules (no Tailwind, no extra dependencies)
- Google Fonts (Syne + DM Sans)
