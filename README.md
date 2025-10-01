# Next.js Starter Template

A production-ready Next.js starter template with modern tooling. This README documents the project structure and explains the purpose of the main files and folders so you can quickly adapt the template.

## 🚀 Quick Start

Clone the template and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/next-js-template.git my-project
cd my-project
pnpm install   # or npm install / yarn
pnpm dev       # start development server
```

## Project file structure

Below is the top-level structure of this template with a short description for each file/folder.

```
next-js-template/
	├─ eslint.config.mjs        # ESLint configuration
	├─ next-env.d.ts            # Next.js TypeScript environment types
	├─ next.config.ts           # Next.js configuration
	├─ package.json             # NPM scripts and dependencies
	├─ postcss.config.mjs       # PostCSS configuration (used by Tailwind)
	├─ README.md                # This file
	├─ tailwind.config.js       # TailwindCSS configuration
	├─ tsconfig.json            # TypeScript compiler options
	├─ public/                  # Static assets served at the root
	│   ├─ file.svg
	│   ├─ globe.svg
	│   ├─ next.svg
	│   ├─ vercel.svg
	│   └─ window.svg
	└─ src/
			├─ app/                 # Next.js App Router entry files
			│   ├─ globals.css      # Global styles (Tailwind entry)
			│   ├─ layout.tsx       # Root layout (HTML shell + providers)
			│   ├─ page.tsx         # Example index page
			│   └─ providers.tsx    # React/Context providers (e.g. theme, stores)
			├─ assets/              # Project-specific static assets (images, icons)
			├─ components/          # Reusable React components
			├─ elements/            # Primitive UI elements or tiny building blocks
			├─ store/               # Simple state/store setup
			│   ├─ config.ts        # Store configuration (e.g. persist, devtools)
			│   └─ index.ts         # Exports the store instance/hooks
			└─ utils/               # Small utility helpers
					├─ tailwind.ts      # Tailwind helper utilities (class helpers, cn wrapper)
					└─ withClientOnly.tsx# Helper for client-only components in the App Router
```

## Files & folders explained

- `eslint.config.mjs` — Project lint rules and plugin configuration.
- `next.config.ts` — Next.js config (routing, images, experimental features).
- `package.json` — Scripts (dev/build/start), dependencies and metadata.
- `postcss.config.mjs` & `tailwind.config.js` — Configure Tailwind and PostCSS.
- `tsconfig.json` & `next-env.d.ts` — TypeScript settings and Next.js type helpers.
- `public/` — Static files available at `/:filename` (good for favicons, images).

- `src/app/` — App Router root. Typical contents:

  - `globals.css` — imports Tailwind base/utilities and project-wide styles.
  - `layout.tsx` — Top-level layout used by Next.js to wrap pages.
  - `page.tsx` — The example home page.
  - `providers.tsx` — A place to assemble React providers (context, theme, stores).

- `src/components/` — Place higher-level, reusable components (Nav, Footer, Card).
- `src/elements/` — Tiny primitives (Button, Icon, Typography) that components compose.
- `src/assets/` — Images, svgs or other media specific to the app.

- `src/store/` — Minimal store wiring (e.g. Zustand, Redux) with `config.ts` and `index.ts`.
- `src/utils/` — Small utilities. Current helpers:
  - `tailwind.ts` — utilities for composing Tailwind class names safely.
  - `withClientOnly.tsx` — wrapper to render components only on the client side (useful inside App Router where server/client boundaries matter).

## Extending the template

- Add pages under `src/app/` (for App Router) or create nested layouts for sections.
- Put shared UI in `src/components/` and primitives in `src/elements/`.
- Configure environment variables in `.env` and update `next.config.ts` if needed.

---
