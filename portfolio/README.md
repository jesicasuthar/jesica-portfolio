# Jesica Suthar — Portfolio
React + TypeScript + Vite. Content lives in `src/data.ts`.
## Setup
`npm install` · `npm run dev` · `npm run build` · `npm run preview`
## Fill in
- `public/resume.pdf` — your CV (View Resume / Download PDF use it)
- `src/data.ts`: `EMAIL`, `LINKEDIN`, and `paper.authors`, `paper.venue`, `paper.year`, `paper.abstract` (copy exactly from your CV / ResearchGate)
- `index.html`: canonical URL once you have a domain
## Deploy (Vercel)
Push to GitHub, import the repo in Vercel, framework "Vite", build `npm run build`, output `dist`. (Not yet deployed or tested on Vercel.)
## GitHub data
Fetched client-side from the public API with sessionStorage caching; failures fall back to a link. Featured projects are curated in `data.ts`.
