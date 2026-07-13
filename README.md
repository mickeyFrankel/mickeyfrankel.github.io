# mickeyfrankel.github.io

Personal portfolio — React 18 + TypeScript + Vite, deployed to GitHub Pages via GitHub Actions.

## Deploy (one-time setup)

1. Create a **public** GitHub repo named exactly `mickeyfrankel.github.io`
2. Push this project to it:
   ```bash
   git init && git add -A && git commit -m "Portfolio v1"
   git branch -M main
   git remote add origin https://github.com/mickeyFrankel/mickeyfrankel.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → GitHub Actions**
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`. Site goes live at **https://mickeyfrankel.github.io** within ~2 minutes.

## Before first deploy

- Drop your CV PDF at `public/Mickey-Frankel-CV.pdf` (the hero's Download button points there)
- Verify all dates in `src/data/content.ts` match your CV and LinkedIn

## Editing content

All content lives in one typed file: `src/data/content.ts` — projects, experience, skills, links. Components never need touching for content changes.

## Local development

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build to dist/
```
# mickeyfrankel.github.io
