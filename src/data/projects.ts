import type { Project } from "./types";

export const projects: Project[] = [
  // ───────────────────────────── AI & AI EDUCATION ─────────────────────────────
  {
    title: "AINA",
    slug: "aina",
    shortDescription:
      "An AI assistant and knowledge base built for Indonesian students living in Egypt.",
    summary:
      "AINA is an AI chat assistant bundled with a productivity and knowledge-base platform for Masisir — Indonesian students in Egypt — covering residency, visas, Al-Azhar enrollment, and daily logistics that are normally scattered across WhatsApp groups.",
    category: ["AI", "Product", "Web Apps"],
    type: "AI Product / Web App",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "AI", "UI/UX"],
    year: "2025",
    liveUrl: "https://ainalabs.pro",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/aina.web",
    brandColor: "#0a0a0f",
    problem:
      "Practical information Masisir need day to day — how to renew an Iqomah (residency permit), get an Egypt visa or Visa on Arrival, enroll at Al-Azhar, or handle a lost passport — is fragmented across dozens of WhatsApp groups, outdated PDFs, and word of mouth. Answers exist, but finding the current, correct one is slow and unreliable.",
    productThinking:
      "Rather than building another static FAQ page, AINA treats the community's accumulated knowledge as a queryable knowledge base and puts a conversational layer on top of it, so a student can ask a question in plain Indonesian and get a sourced answer instead of searching through group chat history.",
    solution:
      "A dark-themed web app centered on an AI chat box (\"Tanyakan apa saja kepada AINA\"), backed by a curated knowledge base covering Iqomah & residency, visas, Al-Azhar enrollment, and passport guidance. It's paired with day-to-day utilities Masisir actually need — a live EGP↔IDR / USD↔IDR converter and a dual Egypt/Jakarta clock — plus a Tasks & Notes area for personal organization. Full app access sits behind a login.",
    designDirection:
      "Dark UI (near-black background, light text) using SF Pro Display for the interface paired with Arabic calligraphic display faces (Amiri, Scheherazade New) for Arabic-script content — a deliberate pairing that keeps the product feeling technical and modern while staying visually anchored to Islamic/Arabic-script material.",
    technicalBuild:
      "React + Vite + TypeScript frontend, Express.js backend, Supabase for auth and data, Tailwind CSS, Playwright/Vitest for testing, deployed on Vercel and Railway.",
    challenges:
      "Curating and structuring genuinely reliable answers (residency and visa rules change) is a harder problem than the chat interface itself — accuracy depends on an internal admin tool (AINA Scraper) that keeps the knowledge base current.",
    lessons:
      "A community AI product lives or dies on the quality of what feeds it, not the chat UI — which is why a companion internal tool for knowledge management was necessary from day one.",
  },
  {
    title: "AINA Scraper",
    slug: "aina-scraper",
    shortDescription:
      "The internal knowledge-base management system that keeps AINA's answers current.",
    summary:
      "A login-gated internal tool for AINA's own team to manage and update the knowledge base that AINA's chat assistant draws its answers from.",
    category: ["AI", "Internal Tools"],
    type: "AI Infrastructure / Internal Tool",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["Full-Stack Development", "AI"],
    year: "2025",
    liveUrl: "https://ainascraper.vercel.app",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/ainascraper",
    problem:
      "AINA's answers are only as good as the knowledge base behind them — someone on the team needs a way to add, correct, and maintain that content without editing a database by hand.",
    solution:
      "An internal, login-gated admin system (\"Sistem manajemen knowledge base untuk AINA\" per its own tagline) for AINA's team to manage knowledge base content directly.",
    technicalBuild: "Node.js/TypeScript, pnpm monorepo, Docker, deployed via Vercel and Railway.",
    notes:
      "Public access is limited to a login screen by design — this is an internal tool, not a consumer product, so most of its surface isn't visible without credentials.",
  },
  {
    title: "AINA Investor",
    slug: "aina-investor",
    shortDescription:
      "A transparency-first fundraising page that itemizes exactly where investor money goes.",
    summary:
      "A public transparency report for prospective AINA investors, breaking down fund allocation across launch/infrastructure, operations/AI engine, and growth/community — with a live funding-progress bar.",
    category: ["AI", "Product"],
    type: "Product / Investor Landing Page",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "UI/UX"],
    year: "2025",
    liveUrl: "https://transparancyaina.vercel.app",
    problem:
      "Early-stage community products asking for financial backing usually offer little visibility into how funds are actually used — which erodes trust with a community-first audience.",
    solution:
      "A dedicated transparency report (\"Laporan Transparansi 2025\") itemizing three cost pillars — Launch & Infrastruktur, Operasional & AI Engine, and Growth & Komunitas — each with a specific estimated cost range, alongside a rationale for AINA's lean, founder-led model, an FAQ, and a live-updating funding-progress bar tied to an Early Bird round.",
    designDirection:
      "Poppins-set page (the page's own unedited browser title, \"Purple Black Poppins Landing Page,\" suggests a purple/black theme, though this wasn't independently confirmed by screenshot).",
    notes:
      "The GitHub repo referenced for this project could not be located under the expected account — treat the implementation details as unverified even though the live page itself is reachable and fully readable.",
  },
  {
    title: "Proposal AINA",
    slug: "proposal-aina",
    shortDescription:
      "A scroll-driven interactive pitch deck explaining AINA's problem, architecture, and roadmap.",
    summary:
      "An interactive, narrative pitch-deck website for AINA aimed at collaborators, sponsors, and contributors — walking through the problem, a 5-layer system architecture, roadmap, and tiered partnership pricing.",
    category: ["AI", "Product"],
    type: "Interactive Product Proposal",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "UI/UX"],
    year: "2025",
    liveUrl: "https://proposalaina.vercel.app",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/proposalaina",
    problem:
      "Explaining an AI product's architecture, roadmap, and value to non-technical partners (UMKM sponsors, contributors, community members) is hard to do with a slide deck alone.",
    solution:
      "A single scrolling website that walks through five concrete Masisir pain points, AINA's feature set, a comparison against generic AI assistants, a 5-step how-it-works flow, a 5-layer system architecture explainer (Knowledge → AI Response → Source & Confidence → Product System → Growth System), a roadmap, contributor roles, and tiered sponsorship pricing for UMKM and corporate partners.",
    designDirection:
      "Dark theme with Space Grotesk headlines over an Inter body — a modern SaaS-pitch-deck aesthetic consistent with AINA's core visual language.",
    technicalBuild:
      "Node.js project with separate frontend/backend/test directories, Replit-scaffolded.",
  },
  {
    title: "Kelas AIGYPT",
    slug: "kelas-aigypt",
    shortDescription:
      "A cohort-based AI literacy course for Masisir, plus an ongoing membership content library.",
    summary:
      "An AI education platform running structured, batch-based cohorts that teach Masisir how to actually use AI for academic work, organizations, business, and content — alongside a self-paced membership library.",
    category: ["AI", "Education"],
    type: "AI Education Platform",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://aigypt.id",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/aigypt2",
    brandColor: "#0a0a0f",
    problem:
      "Most Masisir have used ChatGPT casually, but there's a large gap between casual use and using AI well for academic study, organizational work, business, or content creation.",
    productThinking:
      "AIGYPT frames its audience by role — Akademisi, Organisator, Pebisnis, Kreator, Pencari — rather than by skill level, and builds curriculum around what each of those people actually needs AI to do for them.",
    solution:
      "A cohort program (running in numbered batches, mixing offline and online sessions) covering AI fundamentals and mindset, prompting, academic AI use, organizational/business AI use, and a \"Vibe Coding\" module, with before/after use-case examples, named alumni testimonials, and two membership tiers — a self-paced library and a full cohort track with certification. Membership bundles access to two sibling products, Talqeeh and Deenme.",
    designDirection:
      "Dark theme, Inter throughout — consistent with the wider AINA/AIGYPT product family's visual identity.",
    technicalBuild: "Built and scaffolded on Replit.",
    lessons:
      "Bundling AIGYPT membership with access to Talqeeh and Deenme shows the value of treating these as one ecosystem for the same community rather than isolated products.",
  },
  {
    title: "AIGYPT Games",
    slug: "aigypt-games",
    shortDescription:
      "Gamified AI challenges that turn community engagement into an on-ramp toward AINA.",
    summary:
      "A mini-app hub of playful AI challenges — an AI Poster Challenge and a modular prompt-building game — that reward participation with access to AINA, used as a softer alternative to a direct signup funnel.",
    category: ["AI", "Education", "Experiments"],
    type: "Interactive AI Challenge / Community Web App",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://aigyptgames.vercel.app",
    githubUrl: "https://github.com/darciamuliathiifa-commits/aigyptgames",
    problem:
      "Getting a community to try a new AI product cold, via a plain signup page, converts poorly compared to letting people discover it through something fun.",
    solution:
      "Two live games: an \"AI Poster Challenge\" where participants photograph a real venue, draw a random anomaly card, and use AI to generate a poster for community voting; and \"Racik Prompt,\" a modular prompt-building game that teaches prompt construction from image/text/music/mini-app blocks. Both include a gallery/voting flow and a leaderboard; completing a challenge grants AINA access.",
    designDirection:
      "Dark, purple-tinted background with Plus Jakarta Sans and playful, emoji-driven copy — noticeably more casual and game-like than the rest of the AINA family.",
    technicalBuild: "TypeScript, Supabase, deployed on Vercel.",
  },
  {
    title: "Introducing AIGYPT & AINA",
    slug: "intro-aigypt-aina",
    shortDescription:
      "A chaptered origin-story site introducing the AIGYPT community and the AINA product together.",
    summary:
      "A scroll-driven narrative landing page that introduces both AIGYPT (the community) and AINA (the product) to Masisir who haven't encountered either yet.",
    category: ["AI", "Product"],
    type: "Product / Community Introduction",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "UI/UX"],
    year: "2025",
    liveUrl: "https://introaigypt.vercel.app",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/aigyptpage",
    problem:
      "AIGYPT and AINA had grown across three community batches without a single place that explained, in order, what either one actually was.",
    solution:
      "A chaptered scroll story (\"BAB 01 / BAB 02\") covering a basic AI primer, AIGYPT's community history across its batches with a filterable photo gallery, its curriculum, a dedicated AINA feature walkthrough (Chat AI, Ruang Produktif, Library Muqorror, Teman Belajar flashcards, Forum Masisir, Berita Masisir), and a named team/credits section with a founder's note.",
    designDirection:
      "Dark, violet-tinted background with Plus Jakarta Sans — a softer variant of the AINA dark palette.",
    technicalBuild: "TypeScript, pnpm monorepo, deployed on Vercel.",
  },
  {
    title: "Talqeeh",
    slug: "talqeeh",
    shortDescription:
      "A curated AI prompt library that helps Masisir study Al-Azhar's actual course material.",
    summary:
      "An AI study-companion platform built around Al-Azhar's own \"Muqarrar\" curriculum — a structured library of subject-specific prompts and a bank of real past exam questions with matching answer prompts.",
    category: ["AI", "Education"],
    type: "AI × Islamic Study / Education Web App",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://talqeeh.vercel.app",
    githubUrl: "https://github.com/darufahma-rgb/Madad",
    brandColor: "#0c0c0c",
    problem:
      "Generic AI assistants don't know Al-Azhar's specific Muqarrar (course material) or how it's actually examined, so Masisir get generic answers instead of study help that matches what they're tested on.",
    solution:
      "A membership platform organizing prompt templates across Al-Azhar's subject areas — six categories spanning Ushuluddin & Qur'an, Hadits & Mustholah, Syariah & Fiqh, Aqidah & Pemikiran, Lughah Arabiyah, and Tarikh/Dakwah/Tarbiyah — plus a gated bank of real past exam questions paired with matching answer-prompt templates, per-subject AI tool recommendations, and a 5-question onboarding flow to build a learning profile. One free subject is usable without signup.",
    designDirection:
      "Near-black background with a distinctive mixed type system — DM Sans for UI, Crimson Pro serif and JetBrains Mono for accents, and Arabic display faces (Noto Naskh Arabic, Reem Kufi, Aref Ruqaa, Noto Kufi Arabic) — giving it a more scholarly, editorial feel than the rest of the AINA/AIGYPT family.",
    technicalBuild:
      "JavaScript/Vite, Tailwind CSS, an Express-style server, Replit-scaffolded.",
    lessons:
      "Specificity beats breadth — a prompt library scoped tightly to one institution's actual exam material is more useful to its audience than a general study-AI tool would be.",
  },

  // ───────────────────────────── EDUCATION ─────────────────────────────
  {
    title: "Markaz Fiqih",
    slug: "markaz-fiqih",
    shortDescription:
      "A structured Shafi'i fiqh course platform, brand system, and payment-integrated storefront.",
    summary:
      "An online course platform teaching Shafi'i-madzhab fiqh in a systematic, structured way, complete with a custom brand identity, course storefront, student dashboard, and integrated Indonesian payment gateway.",
    category: ["Education", "Product", "Client Work"],
    type: "Education Platform / Web App",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://kelasmarkazfiqih.com",
    githubUrl: "https://github.com/darufahma-rgb/markazfiqih",
    brandColor: "#7A1B1B",
    problem:
      "Fiqh content online is often scattered and inconsistent about which scholarly opinion it's presenting, making it hard for everyday Indonesian Muslims to learn systematically rather than picking up fragments.",
    productThinking:
      "The platform is positioned explicitly as \"Tempat Belajar Fiqih Madzhab Syafi'i Yang Sistematis dan Terstruktur\" — structured learning with a clear reference hierarchy (primary madzhab opinion → weaker opinion → scholarly ikhtiyar → other madzhab views) — and built as a full e-commerce learning product, not a marketing page, because the audience needed to browse, pay, and actually study in one place.",
    solution:
      "A course catalog with bundles and level filters, multi-method checkout (QRIS, e-wallet, virtual account, card) via the Mayar.id gateway, a student dashboard with progress auto-save, lifetime access and certificates, a separate ebook catalog, and instructor profiles for the two Al-Azhar-based teachers behind the courses.",
    designDirection:
      "A custom logo mark — an open book whose page-folds double as a mosque-gable silhouette with a gold diamond center — in a deep maroon (#7A1B1B) and mustard-gold (#C9A227) system on cream/white. Headlines use a serif display face; body text pairs Plus Jakarta Sans with Inter. A full favicon and Open Graph asset set was built alongside the product, not left as defaults.",
    technicalBuild:
      "React + Vite + TypeScript frontend with Tailwind CSS v4 and shadcn/ui conventions; Express 5 + Drizzle ORM backend; Supabase (Postgres + Edge Functions) for data and payment webhooks; Mayar.id payment gateway; pnpm monorepo; deployed on Vercel.",
    challenges:
      "Integrating a real Indonesian payment gateway (webhooks, payment-status tracking, multiple payment methods) into a learning platform is a materially different problem from a typical course-marketing site.",
    lessons:
      "Brand identity and product UX aren't separable on a project like this — the visual system (a purpose-designed logo, a considered color and type pairing) is part of what makes the platform feel trustworthy for a religious-education audience.",
  },
  {
    title: "Deenme",
    slug: "deenme",
    shortDescription:
      "A personal Islamic worship tracker — prayers, dhikr, and daily reflection with a gamified streak system.",
    summary:
      "A personal ibadah (worship) tracker PWA — its own manifest describes it simply as a \"Personal Ibadah Tracker\" — logging daily prayers, dhikr, and reflection with a rank/streak system.",
    category: ["Product", "AI"],
    type: "Education Web App",
    status: "development",
    confidence: "partial",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    githubUrl: "https://github.com/darufahma-rgb/Deenme",
    brandColor: "#3ecf8e",
    problem:
      "Per the app's own landing copy: staying consistent (istiqamah) with daily prayer, dhikr, and reflection is hard without a way to track it — \"satu hari satu langkah\" (one day, one step).",
    solution:
      "A prayer tracker logging the five daily prayers as on-time/late/qadha with auto-generated schedules (Egyptian Authority or Indonesian KEMENAG calculation methods), post-prayer dhikr/dua guidance with Arabic text and transliteration, a 50+ prayer \"Bank Doa,\" a daily reflection journal with AI-assisted tidy-up and dream interpretation, and a statistics view with A–F grading, a calendar heatmap, and an 8-tier gamified rank system from \"Mubtadi\" to \"Ulul Albab.\" An invite-only \"Talqeeh\" membership tier is referenced but not further explained in the accessible code.",
    designDirection:
      "A dark, deep-green canvas with a mint/emerald accent (#3ecf8e), lime highlight, and cream text, using Bricolage Grotesque for display type paired with IBM Plex Sans Arabic for Arabic script — a modern grotesque with genuine Arabic-script support.",
    technicalBuild:
      "React + Vite (JavaScript), Express server, Supabase, PWA manifest, deployed on Vercel. Repo history shows the Lovable AI app builder was used at some point.",
    notes:
      "The live deployment (deenme.vercel.app) currently returns a 404, so the product can't be demoed live right now — everything above is sourced directly from the repository's own manifest and landing-page copy, not guessed.",
  },
  {
    title: "Qohiroh Digital Ecosystem",
    slug: "qohiroh-digital-ecosystem",
    shortDescription:
      "A three-part digital ecosystem for an Islamic study center in Egypt — public, student, and family portals.",
    summary:
      "An approved, in-planning digital ecosystem for Qohiroh Center spanning a public marketing/enrollment site, a student companion portal, and a parent-facing transparency portal.",
    category: ["Education", "Product", "Client Work"],
    type: "Product Architecture / Client Project (Concept)",
    status: "concept",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Product Architecture", "UI/UX"],
    year: "2026",
    problem:
      "Qohiroh Center runs across three very different audiences with three different needs: prospective students who need to find and register for programs, current students living and studying in Egypt who need day-to-day guidance and structure, and parents back in Indonesia who want visibility into their child's journey without being able to see it firsthand.",
    productThinking:
      "Instead of one generic school platform, the ecosystem is split into three purpose-built products. Qohiroh Santri in particular is deliberately not framed as a generic LMS — it's built around guidance, activities, and documenting a student's journey in Egypt, not grades and assignments.",
    solution:
      "Qohiroh Public — the digital front door: branding, program information, and online registration for prospective students. Qohiroh Santri — a companion space for students already in Egypt, expected to cover a personal dashboard, the Qohiroh agenda, mentoring schedule, activities, attendance, mentor information, progress records, important documents, and a running history of the student's journey. Qohiroh Family — a parent-facing portal in Indonesia surfacing student profile, attendance, activity, progress, mentor reports, documents, and announcements, built around parent transparency and peace of mind as the core product value.",
    challenges:
      "Designing three connected but distinct products for three audiences with very different needs and technical comfort levels, while keeping data consistent across all three.",
    notes:
      "This is a concept-approved, client-planning-stage project — not yet built. Nothing here should be read as an existing, live product; status will update as implementation begins.",
  },

  // ───────────────────────────── TRAVEL TECHNOLOGY ─────────────────────────────
  {
    title: "Umrahme",
    slug: "umrahme",
    shortDescription:
      "A white-label digital companion app that Umrah travel agencies brand as their own for their pilgrims.",
    summary:
      "A B2B white-label SaaS product: a digital companion app for Umrah/Hajj pilgrims that travel agencies license and brand as their own.",
    category: ["Travel", "Product"],
    type: "Umrah / Travel Technology Web App",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://umrahme.sbs",
    githubUrl: "https://github.com/darufahma-rgb/Umrahme",
    brandColor: "#131313",
    problem:
      "During an actual Umrah trip, pilgrims get separated during Tawaf or Sa'i, muthowwif (guides) field the same \"where are we going today\" question over and over, Miqat/ihram instructions get missed, and key logistics get buried in WhatsApp group chat.",
    productThinking:
      "Rather than selling directly to pilgrims, Umrahme sells to the travel agencies that already have the pilgrim relationship — the agency licenses the app, puts its own branding on it, and hands it to its pilgrims for the trip. That business model shapes the whole product: it has to be fully white-labelable with no Umrahme branding visible to the end pilgrim.",
    solution:
      "A companion app covering all 54 prayers (Arabic, transliteration, translation), an automatic Tawaf and Sa'i counter, a four-module interactive manasik (ritual training) course with progress tracking, a step-by-step ibadah guide, a map of 33 historical and pilgrimage sites, real-time prayer times by location, an Umrah fiqh FAQ and glossary, agency-pushed announcements and a daily agenda, a digital pilgrim ID card, a personal travel journal, and a digital Umrah certificate — plus an agency-side admin portal for managing batches, pilgrims, agenda, and announcements. Priced at 10 SAR per pilgrim, free for official travel-crew partners, no setup or monthly fee.",
    designDirection:
      "Warm cream background with near-black, fully pill-shaped call-to-action buttons in white text, set in Plus Jakarta Sans throughout — a clean, minimal SaaS look rather than an ornate religious-iconography style.",
    technicalBuild:
      "pnpm monorepo, React 19 + Vite frontend, Express 5 API, Supabase (auth/data/storage) with Drizzle ORM, TypeScript, deployed on Vercel.",
    challenges:
      "Building a genuinely white-label product — every surface a pilgrim sees has to carry the agency's brand, not Umrahme's — is a different engineering problem than a normal consumer app.",
    lessons:
      "Selling to the operator instead of the end user changes what the product actually needs to be: multi-tenant branding and an admin/batch-management layer become as core as the pilgrim-facing features themselves.",
  },
  {
    title: "Temantiket Center",
    slug: "temantiket-center",
    shortDescription:
      "An internal admin portal for a travel agency's Umrah and Hajj operations.",
    summary:
      "A login-gated internal operations portal for Umrah/Hajj travel agency staff — pilgrim tracking, package cost calculation, and document handling.",
    category: ["Travel", "Client Work", "Internal Tools"],
    type: "Travel Service / Operational Web App",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development"],
    year: "2025",
    liveUrl: "https://temantiket.vercel.app",
    githubUrl: "https://github.com/darufahma-rgb/temantiket",
    problem:
      "Running Umrah/Hajj packages involves pilgrim (jamaah) tracking, package cost calculation, document handling, and passport verification — operational work that doesn't scale on spreadsheets and paper.",
    solution:
      "An internal admin portal (\"Portal Admin\") for travel-agency staff, per its own repository documentation covering jamaah tracking, package cost calculation, document management, PDF generation, and OCR passport scanning.",
    technicalBuild:
      "React + TypeScript + Vite + Tailwind CSS, Node.js API, Supabase (Postgres) with Drizzle ORM, Vitest, deployed on Vercel.",
    notes:
      "The live product sits behind a login wall, so its internal screens weren't independently viewable in this research pass — the feature list above comes from the repository's own documentation, not a hands-on walkthrough. The specific service list sometimes associated with this project (airline tickets, Egypt Visa on Arrival, Student Entry Visa, airport IMEI services, ticket rescheduling) could not be independently confirmed and isn't claimed here.",
  },
  {
    title: "Temantiket Ticket Generator",
    slug: "temantiket-ticket-generator",
    shortDescription:
      "A public tool that generates professional, IATA-style flight e-tickets for travel agents.",
    summary:
      "A flight e-ticket and itinerary generator built for travel agents — real-time preview, multiple templates, and one-click export.",
    category: ["Travel", "Internal Tools"],
    type: "Internal Tool",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://temantiket-redesign.vercel.app",
    githubUrl:
      "https://github.com/darciatemantaraglobal-gif/temantiket-redesign",
    problem:
      "Formatting a professional-looking flight e-ticket or itinerary by hand, for every booking, is slow and inconsistent — the tool's own tagline is \"Dibuat oleh travel agent, untuk travel agent\" (made by a travel agent, for travel agents).",
    solution:
      "A live ticket generator with real-time preview, multiple templates (Direct, Transit, Umrah, Graduation/Wisuda), multi-passenger support, auto-parsing of itinerary codes, and export to PNG, PDF, print, or a WhatsApp-formatted message.",
    designDirection:
      "A dark navy hero transitioning into a light slate body, Plus Jakarta Sans for body text and a serif display face for headings — an aviation-ticket-inspired look.",
    technicalBuild: "Built with Lovable (React/Vite/TypeScript/Tailwind/shadcn stack).",
    notes:
      "The live tool itself displays marketing stats (user counts, ticket counts, ratings) — these are the product's own on-page claims, not independently verified, and aren't restated as fact here.",
  },
  {
    title: "IGH Tour",
    slug: "igh-tour",
    shortDescription: "A travel/Umrah operations web app, currently stuck on its loading screen.",
    summary:
      "A travel and Umrah/Hajj operations web app, structurally similar to Temantiket Center, that did not load past its loading screen during research.",
    category: ["Travel", "Web Apps"],
    type: "Travel Web App",
    status: "development",
    confidence: "incomplete",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://ightour.vercel.app",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/igh-tour",
    notes:
      "At the time of research, the live app mounted its shell but never progressed past a \"Memuat…\" (Loading…) screen, and its repository's documentation is word-for-word identical to Temantiket Center's — this looks like an early duplicate or shared scaffold rather than a distinct, finished product. Presented here as in-development rather than production until it's confirmed working.",
  },
  {
    title: "Dreammecca",
    slug: "dreammecca",
    shortDescription:
      "A licensed Umrah travel agency's marketing site, leading with trust and legal verification.",
    summary:
      "A full marketing site for PT. Dream Mecca International, a licensed Indonesian Umrah travel agency, built around trust and license verification in a market with known travel scam concerns.",
    category: ["Travel", "Web Apps", "Client Work"],
    type: "Travel / Umrah Web App",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://dreammecca.vercel.app",
    githubUrl: "https://github.com/darciatemantaraglobal-gif/dreammecca",
    problem:
      "Indonesia's Umrah travel market has a real trust problem — the site leads directly with license verification to counter \"banyak berita penipuan travel Umroh\" (frequent news of Umrah travel scams).",
    solution:
      "A content-rich marketing site opening with PPIU/Kemenag license and HIMPUH membership verification, a facilities list (certified Al-Azhar- and Madinah-Islamic-University-trained guides, 4–5 star hotels near both holy mosques, free visa processing, professional photography), a pilgrim equipment/kit list, departure-batch photo galleries, testimonials, an FAQ, and direct WhatsApp contact with a physical Jakarta office address.",
    designDirection:
      "Warm cream background, Plus Jakarta Sans body text, a custom serif-style display face for white headline text over photo heroes, and deep navy/indigo text on white pill CTA buttons — a polished, editorial travel-agency look.",
    technicalBuild:
      "pnpm workspace monorepo — React + Vite frontend, Express API, PostgreSQL with Drizzle ORM, Zod, Orval for API codegen.",
  },
  {
    title: "Itinerary Mesir",
    slug: "itinerary-mesir",
    shortDescription:
      "A personalized, Temantiket-branded digital itinerary built for one client's Egypt trip.",
    summary:
      "A bespoke, single-client digital itinerary microsite — a Temantiket-branded deliverable for one named family's 10-day Egypt and Umrah trip.",
    category: ["Travel", "Client Work"],
    type: "Digital Travel Itinerary",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://itinerarymesir.vercel.app",
    githubUrl: "https://github.com/darufahma-rgb/mesir-emas",
    solution:
      "A day-by-day 10-day itinerary (Kuala Lumpur → Cairo → Giza → Luxor → Cairo → Alexandria → Jeddah → Makkah Umrah → Jakarta) addressed directly to the traveling family by name, with per-day detail pages, travel tips, a local food guide, a landmark list with map links, and a closing personal message — branded throughout as a Temantiket deliverable rather than a standalone product.",
    designDirection:
      "Warm off-white background, Outfit for body text, Playfair Display serif for the large white hero headline over a photo — a premium, editorial travel-magazine feel.",
    technicalBuild: "React + TypeScript + Vite + Tailwind CSS with shadcn/ui, deployed on Vercel.",
    notes:
      "Best framed as a personalized itinerary product Temantiket builds for individual clients, rather than an independent brand of its own.",
  },
  {
    title: "Itinerary El Massa",
    slug: "itinerary-el-massa",
    shortDescription: "A multi-departure Umrah itinerary hub built for El Massa Tour & Travel.",
    summary:
      "A branded itinerary hub for El Massa Tour & Travel listing multiple scheduled Umrah departures, each linking through to a full day-by-day itinerary.",
    category: ["Travel", "Client Work"],
    type: "Client Travel Itinerary",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://elmassaitinerary.vercel.app",
    githubUrl: "https://github.com/darufahma-rgb/elmassa.oct",
    solution:
      "A departure-selection landing page (multiple 2026 batches, some marked \"coming soon\") where each open departure links to a full 11-day itinerary — flights, a three-holy-cities guide to Makkah, Madinah, and Thaif with named sites and map links, an itemized inclusions list, and trip-prep tips.",
    designDirection: "Poppins body text with a custom display face for white headline text over a photo hero.",
    technicalBuild: "Vite, React, TypeScript, shadcn/ui, Framer Motion.",
  },

  // ───────────────────────────── CLIENT SYSTEMS ─────────────────────────────
  {
    title: "El Massa Travel Management System",
    slug: "el-massa-travel-management-system",
    shortDescription:
      "A custom internal operations system designed around El Massa Tour & Travel's own workflow.",
    summary:
      "A custom internal travel-operations system built specifically for El Massa Tour & Travel's business workflow.",
    category: ["Travel", "Client Work", "Internal Tools"],
    type: "Custom Internal Travel Management System",
    status: "client-delivery",
    confidence: "incomplete",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development"],
    year: "2025",
    problem:
      "El Massa Tour & Travel needed operational tooling shaped around how the business actually runs, rather than a generic off-the-shelf travel CRM.",
    productThinking:
      "As a client-delivered internal system, this project centers on translating a specific travel agency's real operational workflow into software, rather than shipping a general-purpose product.",
    solution:
      "A custom internal system for El Massa Tour & Travel's operations.",
    notes:
      "This is a client-delivered internal system with no public URL. Its full feature set (customer data, packages, bookings, participants, payments, staff, and operational administration) is described by the client relationship, but not independently re-verifiable from a public deployment — so specific screens and workflows aren't claimed here beyond what's been confirmed. Public repos associated with the same client (elmassaitinerary, el-massa-umrah-hub) are customer-facing package browsers, not this internal system.",
  },

  // ───────────────────────────── MARKETPLACE & COMMUNITY ─────────────────────────────
  {
    title: "Nemsyi",
    slug: "nemsyi",
    shortDescription:
      "A discovery platform where Masisir find products, services, and community listings — then move to WhatsApp to transact.",
    summary:
      "A community marketplace and discovery platform for Masisir in Cairo — built so people arrive specifically looking for what they need, instead of scrolling past it in a WhatsApp group.",
    category: ["Product", "Web Apps"],
    type: "Community Marketplace / Product & Service Discovery Platform",
    status: "pre-launch",
    confidence: "partial",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    githubUrl: "https://github.com/darciamuliathiifa-commits/nemshi",
    brandColor: "#005B4F",
    problem:
      "In a WhatsApp group, people see whatever happens to pass by. Masisir looking for a specific product, service, or someone to bring something back from Indonesia have no dedicated place to search — only scattered, noisy group chats.",
    productThinking:
      "Nemsyi is deliberately scoped as a discovery layer, not a full transactional marketplace — no in-app wallet, chat, or payment infrastructure for buyer-seller transactions. Once someone finds what they need, they connect with the provider directly, usually over WhatsApp, keeping the product simple and the trust model familiar to the community.",
    solution:
      "A listings platform (Jelajahi/Explore) for products, services, and community posts, with the ability to post an ad, save listings, and track your own. A \"Sayembara\" feature lets people post a specific request or bounty for others to respond to. Sellers can pay for a Paket-Plus promoted listing through an integrated Indonesian payment gateway (Mayar) — the only money that moves through the platform itself. An admin dashboard handles listings, moderation, reports, and promotions.",
    designDirection:
      "A warm, cream-and-yellow marketing theme paired with a softer in-app palette — teal as the primary ink color with mint, pale-yellow, and pink accents — using Sora and Manrope for text and Black Han Sans for bold display headers.",
    technicalBuild:
      "Next.js 16, React 19, TypeScript, Supabase (auth/DB), Leaflet for map-based browsing, Tailwind CSS 4, deployed on Vercel.",
    challenges:
      "Keeping the product intentionally simple — resisting the pull to build in-app chat or payments — while still making discovery genuinely better than a WhatsApp group.",
    notes:
      "Pre-launch: repo is actively developed but there is no public live deployment yet, so functional completeness of every route hasn't been independently verified.",
  },

  // ───────────────────────────── COMPANY & LANDING PAGE WORK ─────────────────────────────
  {
    title: "Aterra",
    slug: "aterra",
    shortDescription:
      "A B2B export-commodity site presenting Indonesian coffee, spice, and charcoal briquette exports to global buyers.",
    summary:
      "A corporate landing page for an Indonesian agri-export company, presenting commodity sourcing, origin traceability, certifications, and an export-inquiry funnel for international wholesale buyers.",
    category: ["Client Work"],
    type: "Corporate Landing Page",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://anandaterranusantara-alpha.vercel.app",
    githubUrl: "https://github.com/darciamuliathiifa-commits/aterradesign",
    brandColor: "#B3372B",
    problem:
      "International buyers sourcing commodities like coffee, cinnamon, nutmeg, and charcoal briquettes need to trust an exporter's origin claims, certifications, and logistics before committing — hard to convey through a generic company site.",
    solution:
      "An editorial, document-styled site (\"FROM INDONESIAN SOIL TO THE WORLD\") presenting an interactive origin map across eight Indonesian coffee-growing regions, detailed lot-level coffee profiles (region, altitude, process, variety, tasting notes), a four-step export process, certifications (COO, ICO, Phytosanitary, Fumigation), and a direct export-inquiry form segmented by buyer country.",
    designDirection:
      "A cream background with near-black text and a terracotta/rust accent, built around a \"dossier\" aesthetic — heavy 900-weight Archivo headlines paired with IBM Plex Mono labels, reinforced by manifest-style section numbering (\"DOC 01 / ABOUT ATERRA\") that gives the whole site a stamped, official feel appropriate for an export business.",
    technicalBuild:
      "React + Vite, TypeScript, Tailwind CSS, Radix UI/shadcn patterns, Framer Motion, TanStack Query, react-hook-form + zod, wouter routing, deployed on Vercel.",
  },
  {
    title: "Gallop Madinah",
    slug: "gallop-madinah",
    shortDescription:
      "A premium desert horse-riding experience brand and booking site for visitors to Madinah.",
    summary:
      "A luxury desert horse-riding tour brand and booking site for Madinah, Saudi Arabia, with a full price list and family-friendly positioning.",
    category: ["Client Work", "Branding"],
    type: "Brand / Business Landing Page",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://gallopmadinah.id",
    brandColor: "#AC8B39",
    problem:
      "Positioning a premium, family-safe desert experience in Madinah requires a brand that feels trustworthy and high-end at once, with clear pricing for a range of group sizes.",
    solution:
      "A dark, luxury-styled site presenting the \"Desert Horse Riding\" experience (an 8–10km, 1.5–2hr trek with an Arab rest stop), family-safety messaging, a full tiered price list by rider count and group size in SAR, add-ons like drone documentation and an Arabian Camp Experience, and a photo gallery.",
    designDirection:
      "Near-black background with off-white text and a warm gold/bronze accent, pairing Creato Display for body copy with the bold expanded display face Akira Expanded for navigation and labels — a premium, editorial desert-luxury feel.",
    notes:
      "The GitHub repo referenced for this project could not be located publicly at the time of research — implementation/tech-stack details aren't independently verifiable, though the live site itself was fully reviewed.",
  },
  {
    title: "Valeoora",
    slug: "valeoora",
    shortDescription:
      "A cinematic photography and videography brand for pilgrims documenting their journey in Makkah, Madinah, and Al Ula.",
    summary:
      "A premium photography and videography service brand (\"Beyond Perfect Moments\") for pilgrims and travelers wanting professional documentation across Makkah, Madinah, and Al Ula.",
    category: ["Client Work", "Branding"],
    type: "Brand / Business Landing Page",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://valeoora.com",
    brandColor: "#FF8000",
    problem:
      "Pilgrims and travelers wanting professional photo/video coverage of an Umrah trip or an on-site wedding (akad nikah) need a service that feels both premium and trustworthy at sacred sites.",
    solution:
      "A cinematic dark site covering service packages across Makkah, Madinah, and Al Ula (including horseback and city-tour documentation and wedding/akad nikah coverage), an FAQ, a named \"Meet the Crew\" team section, and direct booking contact.",
    designDirection:
      "Near-black background, warm off-white text, and a vivid orange accent, built entirely around a single bold display face (CreatoDisplay) at a very large scale for the hero headline — an editorial, photography-portfolio feel.",
    notes:
      "The GitHub repo referenced for this project could not be located publicly at the time of research — the live site itself was fully reviewed and is the source for everything above.",
  },
  {
    title: "SYMP",
    slug: "symp",
    shortDescription: "Daru's own creative studio — productized branding, web, and content packages sold direct.",
    summary:
      "SYMP Studio is Daru's own design studio brand, selling fixed-price logo, brand kit, poster, social content, and web-development packages directly through a single pricing-page-style site.",
    category: ["Client Work", "Branding"],
    type: "Creative / Digital Service Website",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "UI/UX", "Brand Design", "Full-Stack Development"],
    year: "2025",
    liveUrl: "https://symp-us.vercel.app",
    brandColor: "#8A0202",
    problem:
      "Selling design and dev services to budget-conscious Indonesian small businesses works better with transparent, fixed pricing than an open-ended \"contact us for a quote.\"",
    solution:
      "A long-scroll, SaaS-pricing-page-style site with tiered packages for logo design, brand kits, posters, Instagram carousel content, landing-page websites, and hosting/maintenance — each with fixed IDR pricing, a 4-step ordering process, and WhatsApp-based ordering.",
    designDirection:
      "Poppins throughout at a bold, large scale, with a maroon primary accent and a yellow secondary accent over a light neutral background — closer to a SaaS pricing page than a typical creative-studio portfolio.",
    technicalBuild: "The site itself states its own web-package stack: React JS + Tailwind CSS.",
    notes:
      "SYMP Studio is the same studio credited in the footer of the El Massa and MideastLens brand-presentation sites, and its founder bio names Daru directly, confirming this is the umbrella brand for the designer's own branding/web/merchandise services.",
  },

  // ───────────────────────────── BRAND PRESENTATION PROJECTS ─────────────────────────────
  {
    title: "El Massa Tour & Travel Logo",
    slug: "el-massa-logo",
    shortDescription: "A complete brand-identity presentation for El Massa Tour & Travel's diamond-and-compass mark.",
    summary:
      "A brand-identity case-study site for El Massa Tour & Travel, presenting a diamond-and-compass logo concept symbolizing safe, guided, spiritual travel, alongside a full color, type, and mockup system.",
    category: ["Branding", "Client Work"],
    type: "Brand Identity Presentation",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["Brand Design"],
    year: "2025",
    liveUrl: "https://elmassa-logo.vercel.app",
    brandColor: "#5C3D2E",
    solution:
      "A slide-deck-style presentation walking through the logo concept (a diamond, referencing the Arabic meaning of \"El Massa,\" paired with a compass/star symbolizing guidance), brand personality (Terpercaya & Profesional, Elegan & Berkelas, Modern & Premium), a four-color system (Brown, Cream Sand, Rose Pink, Gold Accent), a Playfair Display + Inter typography system, and implementation mockups across banners, business cards, stationery, ID cards, tote bags, and letterhead.",
    designDirection:
      "Primary brown (#5C3D2E), cream sand (#F5F1E8), rose pink, and gold accent on a white page background — a warm, elegant, luxury-travel palette with Playfair Display headlines over Inter body text.",
  },
  {
    title: "Mideastlens Logo",
    slug: "mideastlens-logo",
    shortDescription: "A brand-identity presentation for a Middle-East visual storytelling and media brand.",
    summary:
      "A brand-identity case-study site for MideastLens, a visual-media brand for content creators and travelers, built around a lens/perspective symbol and a burgundy-and-cream palette.",
    category: ["Branding"],
    type: "Brand Identity Presentation",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Brand Design"],
    year: "2025",
    liveUrl: "https://mideastlens.vercel.app",
    githubUrl: "https://github.com/darciamuliathiifa-commits/mideastlens-mirror",
    brandColor: "#3D2426",
    solution:
      "The same slide-deck brand-presentation format as El Massa's logo case study — logo variations, brand pillars (Brand Essence, Target Audience, Vision), a lens/perspective philosophy section (Universal Symbol, Perjalanan Visual, Fokus & Ketajaman, Modern & Timeless), a burgundy/cream/black color system, a Symtext + Montserrat type system, and implementation mockups across a flag, cap, paper goods, photographer gear, and a bag.",
    designDirection:
      "Primary burgundy (#3D2426), cream sand, and a near-black neutral, with a dramatic display face (Symtext) for headlines and Montserrat for body/UI — sharing the same case-study template as the El Massa brand deck, built by the same studio.",
    technicalBuild: "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, built via Lovable.",
  },

  // ───────────────────────────── PERSONAL & CLIENT PORTFOLIO PROJECTS ─────────────────────────────
  {
    title: "Portfolio Rudy Alfarizi",
    slug: "rudy-alfarizi",
    shortDescription: "A professional service site for an authorized Umrah guide (muthowwif).",
    summary:
      "A client portfolio/service website for Rudy Alfarizi, a professional muthowwif (authorized Umrah pilgrimage guide).",
    category: ["Client Work"],
    type: "Client Portfolio Website",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2026",
    liveUrl: "https://rudyalfarizi.com",
    githubUrl: "https://github.com/hdmimesir-afk/rudyalfarizi",
    technicalBuild: "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, built via Lovable, deployed on Vercel.",
    notes:
      "Site renders client-side, so full visual/content detail wasn't independently captured in this research pass beyond the confirmed page title and tech stack.",
  },
  {
    title: "Darcia Wedding Invitation",
    slug: "darcia-wedding-invitation",
    shortDescription: "A premium digital wedding invitation product.",
    summary: "A premium digital invitation product for weddings and events.",
    category: ["Product"],
    type: "Digital Invitation / Personal Web Product",
    status: "production",
    confidence: "partial",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://darcia.id",
    githubUrl:
      "https://github.com/darciatemantaraglobal-gif/darcia-digital-invitations",
    technicalBuild: "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, built via Lovable, deployed on Vercel.",
    notes:
      "Site renders client-side, so full visual/content detail wasn't independently captured in this research pass beyond the confirmed page title and tech stack.",
  },
  {
    title: "Der Invoice",
    slug: "der-invoice",
    shortDescription: "A free, no-login invoice generator with client-side PDF export.",
    summary:
      "A web-based invoice generator for freelancers and small businesses — no account required, with live preview and PDF/PNG export.",
    category: ["Product", "Web Apps"],
    type: "Invoice / Business Utility Web App",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://derinvoice.lovable.app",
    githubUrl: "https://github.com/hdmimesir-afk/derinvoice",
    problem:
      "Freelancers and small Indonesian businesses (UMKM) often need a quick, professional invoice without signing up for accounting software.",
    solution:
      "A side-by-side editor and live-preview tool for building invoices — company/client details, line items, bank account info, logo and signature upload, a set of named color presets — exportable to PDF or PNG, usable without an account, with optional login for saving templates.",
    technicalBuild: "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, Supabase, built via Lovable.",
  },
  {
    title: "Der Life OS",
    slug: "der-life-os",
    shortDescription: "A personal operating system unifying finance, projects, invoicing, and daily habits into one dashboard.",
    summary:
      "A personal life-management system in active development — unifying finance, client/project tracking, invoicing, gamified daily missions, and travel document tracking into a single dashboard.",
    category: ["Product", "Experiments"],
    type: "Personal Operating System",
    status: "development",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development"],
    year: "2026",
    githubUrl: "https://github.com/hdmimesir-afk/darulifeos",
    problem:
      "Running finances, client work, invoices, and personal habits across separate tools makes it hard to see the whole picture of a busy, multi-project life.",
    solution:
      "A single dark-mode dashboard covering transaction management (with automatic entries when invoices are marked paid), client and project tracking, invoice lifecycle automation, a daily mission system with XP/level progression, Islamic productivity logging, and travel planning with document-expiry monitoring.",
    technicalBuild:
      "pnpm workspaces monorepo, Node.js 24, TypeScript, React + Vite frontend, Express 5 API, PostgreSQL with Drizzle ORM, auto-generated React Query hooks and Zod schemas from an OpenAPI spec.",
    notes:
      "Early-stage: currently single-profile with access controlled by invitation code, not yet a public product. Presented here as development-stage, not production.",
  },

  // ───────────────────────────── BRANDING & VISUAL DESIGN WORK ─────────────────────────────
  {
    title: "El Massa Brand & Merchandise System",
    slug: "el-massa-brand-merchandise",
    shortDescription:
      "A full brand and merchandise system for El Massa Tour & Travel — from logo to bags, apparel, and prayer books.",
    summary:
      "A complete brand and physical-merchandise system for El Massa Tour & Travel, extending the diamond-and-compass identity across apparel, travel gear, and printed materials.",
    category: ["Branding", "Client Work"],
    type: "Brand & Merchandise System",
    status: "client-delivery",
    confidence: "partial",
    featured: true,
    role: ["Brand Design"],
    year: "2025",
    brandColor: "#632A0F",
    problem:
      "A travel brand's identity needs to hold up consistently across dozens of physical touchpoints pilgrims actually carry with them — not just a website.",
    productThinking:
      "The merchandise system extends the same brand logic established in the El Massa logo identity work, applied to a much wider range of physical formats travelers use throughout an Umrah trip.",
    solution:
      "A merchandise line including a backpack, notebook, prayer book, lanyard, luggage cover, hijab, apparel, mukena, and staff uniforms — designed as mockups within the brand system.",
    designDirection:
      "Brand palette of brown (#632A0F) and pink (#F48DA1), applied consistently across all merchandise mockups.",
    gallery: [],
    notes:
      "TODO: Add merchandise mockup photography (backpack, notebook, prayer book, lanyard, luggage cover, hijab, apparel, mukena, uniforms).",
  },
  {
    title: "Haramain Visual / Haramain Capture",
    slug: "haramain-visual",
    shortDescription: "Branding exploration for an Umrah and Saudi documentation service.",
    summary:
      "A branding exploration for a Saudi/Umrah documentation service, covering logo, brand system, and apparel/gear mockups.",
    category: ["Branding"],
    type: "Brand Identity Exploration",
    status: "concept",
    confidence: "partial",
    featured: false,
    role: ["Brand Design"],
    year: "2025",
    solution:
      "Logo and brand-system exploration with mockups across apparel, a cap, lanyard, vest, and brand-ambassador presentation.",
    gallery: [],
    notes: "TODO: Add brand mockups (logo, cap, lanyard, vest, ambassador shots).",
  },
  {
    title: "Nemsyi Creative Campaign",
    slug: "nemsyi-creative-campaign",
    shortDescription: "Editorial, neo-brutalist creative direction exploring Nemsyi's marketplace visual world.",
    summary:
      "A creative-direction exploration for Nemsyi's visual identity — editorial and neo-brutalist / riso-inspired directions depicting marketplace, service, and community scenes.",
    category: ["Branding", "Experiments"],
    type: "Creative Campaign / Visual Direction",
    status: "concept",
    confidence: "partial",
    featured: false,
    role: ["Brand Design", "UI/UX"],
    year: "2026",
    solution:
      "Creative direction spanning editorial layout, neo-brutalism, and riso-inspired visuals to depict Nemsyi's marketplace, service, and community scenes.",
    gallery: [],
    notes: "TODO: Add creative direction visuals.",
  },
  {
    title: "Hamasah Bakery",
    slug: "hamasah-bakery",
    shortDescription: "A warm, modern brand identity in progress for a bakery.",
    summary:
      "An in-progress brand identity for Hamasah Bakery, built around a warm, sincere, and modern personality.",
    category: ["Branding"],
    type: "Brand Identity (In Progress)",
    status: "concept",
    confidence: "verified",
    featured: false,
    role: ["Brand Design"],
    year: "2026",
    designDirection:
      "Brand personality: warm, sincere, special, modern. Preferred primary color is yellow; purple is explicitly avoided.",
    gallery: [],
    notes: "TODO: Add brand identity visuals as the project develops.",
  },
  {
    title: "Hamasah Laundry",
    slug: "hamasah-laundry",
    shortDescription: "A clean, modern brand identity in progress for a laundry service.",
    summary:
      "An in-progress brand identity for Hamasah Laundry, built around a clean, fresh, caring personality.",
    category: ["Branding"],
    type: "Brand Identity (In Progress)",
    status: "concept",
    confidence: "verified",
    featured: false,
    role: ["Brand Design"],
    year: "2026",
    designDirection:
      "Brand personality: clean, fresh, care, modern. Preferred primary color is yellow; purple is explicitly avoided.",
    gallery: [],
    notes: "TODO: Add brand identity visuals as the project develops.",
  },
];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export const ALL_CATEGORIES = [
  "All",
  "AI",
  "Travel",
  "Education",
  "Product",
  "Web Apps",
  "Internal Tools",
  "Branding",
  "Client Work",
  "Experiments",
] as const;
