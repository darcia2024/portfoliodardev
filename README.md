# Daru — Portfolio

Personal portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Development

```bash
npm run dev      # start the dev server on localhost:3000
npm run build    # production build (also runs typecheck)
npm run lint     # eslint
```

## Adding a new project

The whole site is driven by one file: [`src/data/projects.ts`](src/data/projects.ts).
Nothing else needs to change to add a project — pages, the archive filters,
the homepage's "More Projects" list, the sitemap, and case study routing all
read from this file automatically.

To add a project:

1. Add a new object to the `projects` array in `src/data/projects.ts`,
   matching the `Project` type in `src/data/types.ts`.
2. Give it a unique `slug` — this becomes its URL at `/work/[slug]`.
3. Set `featured: true` only for projects that should appear in the
   homepage/`/work` editorial "Selected Work" rows. If you add a featured
   project, also add its slug to the `FEATURED_ORDER` array in
   `src/app/page.tsx` and `src/app/work/page.tsx` to control where it sits
   in the sequence.
4. If you don't have a screenshot yet, leave `gallery` empty — the case
   study will render a placeholder automatically (see
   `src/components/preview-placeholder.tsx`) instead of a broken image.
5. Only fill in case-study fields (`problem`, `solution`,
   `technicalBuild`, etc.) with information you can actually verify. Use
   `confidence: "partial"` or `"incomplete"` and the `notes` field to flag
   anything that hasn't been independently confirmed (a down site, an
   inaccessible repo, a client-stated-but-unverified feature).

No other file needs to be touched — the archive's category filters read
from `ALL_CATEGORIES` in the same data file, so a new `category` value
there should be added to that list too.
