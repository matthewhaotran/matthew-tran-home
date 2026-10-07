# matthew-tran.com

Personal portfolio for Matthew Tran, a software engineer building with AI. Live at [matthew-tran.com](https://matthew-tran.com).

![Preview of the homepage](docs/preview.png)

## What's on the page

- **About**: who I am and how I work (AI-first, scoping, debugging, mentoring)
- **Experience**: Software Engineer, Mentor & Team Enabler, QA Engineer, Support
- **Toolbox**: AI tooling and core stack
- **Projects**: [Chat](https://chat.matthew-tran.com), [Matthew Tran Shop](https://shop.matthew-tran.com) and [Unpaywall](https://unpaywall.matthew-tran.com), with previews

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript, ESLint
- [Geist](https://vercel.com/font) via `next/font`
- Deployed on [Vercel](https://vercel.com), auto-deploying from `main`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Editing content

Page copy and data (roles, toolbox, projects) live at the top of [`src/app/page.tsx`](src/app/page.tsx). The scroll-spy nav is in [`src/app/scroll-nav.tsx`](src/app/scroll-nav.tsx). Project preview images are in `public/projects/`.

## Deployment

Pushing to `main` triggers a Vercel deployment.
