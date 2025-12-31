# Meet The Dexy

Meet The Dexy is a tiny Next.js + Tailwind demo showcasing `Dexy`, the friendly mascot for Codex. The app provides a simple gallery of `Dexy` expressions and downloadable PNGs, built with the Next.js App Router and Tailwind CSS.

**Status:** Minimal demo — ready for local development.

**Contents:**
- `app/` — Next.js App Router files (`layout.tsx`, `page.tsx`).
- `public/dexy/` — images: `idle.png`, `wave.png`, `happy.png`.
- `styles/` — global Tailwind stylesheet `globals.css`.
- `tailwind.config.js`, `postcss.config.js`, `next.config.js`, `package.json`.

## Features

- Simple landing page and gallery of Dexy expressions.
- Direct PNG downloads from the gallery items.
- Tailwind CSS for styling and responsive layout.

## Prerequisites

- Node.js 18+ recommended
- npm (or Yarn)

## Local Setup

1. Install dependencies

```bash
cd /workspaces/Meet_The_Dexy
npm install
```

2. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server after build

## Notes

- Images are served from `public/dexy/` and referenced from the app as `/dexy/<file>.png`.
- The project uses Next.js (installed version in `package.json`). If you see a security notice about the Next.js version, consider upgrading to the latest patched release.

## Directory Structure

```
Meet_The_Dexy/
├─ app/
│  ├─ layout.tsx
  │  └─ page.tsx
├─ public/
│  └─ dexy/
│     ├─ idle.png
│     ├─ wave.png
│     └─ happy.png
├─ styles/
│  └─ globals.css
├─ tailwind.config.js
├─ postcss.config.js
├─ next.config.js
├─ package.json
└─ README.md
```

## Contributing

PRs welcome — keep changes small and focused. For feature ideas, open an issue.

## License

This demo does not include a license by default. Add a `LICENSE` file if you intend to open-source this project.

---

If you'd like, I can:

- start the dev server here and open the app,
- bump Next.js to the latest patched release and update dependencies, or
- add basic tests and GitHub Actions for CI.

Which of these would you like next?
# Meet_The_Dexy