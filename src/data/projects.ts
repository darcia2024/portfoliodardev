import "server-only";
import type { Project, ProjectTranslations } from "./types";
import translationsId from "./translations.id.json";

const idTranslations = translationsId as ProjectTranslations;

const projects: Project[] = [
  // ───────────────────────────── AI & AI EDUCATION ─────────────────────────────
  {
    title: "AINA",
    slug: "aina",
    shortDescription:
      "An AI assistant and knowledge base built for Indonesian students living in Egypt.",
    summary:
      "AINA is an AI chat assistant bundled with a productivity and knowledge-base platform for Masisir , Indonesian students in Egypt , covering residency, visas, Al-Azhar enrollment, and daily logistics that are normally scattered across WhatsApp groups.",
    category: ["AI", "Product", "Web Apps"],
    type: "AI Product / Web App",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "AI", "UI/UX"],
    year: "2025",
    liveUrl: "https://ainalabs.pro",
    brandColor: "#0a0a0f",
    cover: "/aina-cover-v2.png",
    gallery: [
      "/aina-feature-1.png",
      "/aina-feature-2.png",
      "/aina-feature-3.png",
      "/aina-feature-4.png",
      "/aina-feature-5.png",
      "/aina-feature-6.png",
    ],
    problem:
      "Practical information Masisir need day to day , how to renew an Iqomah (residency permit), get an Egypt visa or Visa on Arrival, enroll at Al-Azhar, or handle a lost passport , is fragmented across dozens of WhatsApp groups, outdated PDFs, and word of mouth. Answers exist, but finding the current, correct one is slow and unreliable.",
    productThinking:
      "Rather than building another static FAQ page, AINA treats the community's accumulated knowledge as a queryable knowledge base and puts a conversational layer on top of it, so a student can ask a question in plain Indonesian and get a sourced answer instead of searching through group chat history.",
    solution:
      "A dark-themed web app centered on an AI chat box (\"Tanyakan apa saja kepada AINA\"), backed by a curated knowledge base covering Iqomah & residency, visas, Al-Azhar enrollment, and passport guidance. It's paired with day-to-day utilities Masisir actually need , a live EGP↔IDR / USD↔IDR converter and a dual Egypt/Jakarta clock , plus a Tasks & Notes area for personal organization. Full app access sits behind a login.",
    outcomes: [
      "Turned scattered community guidance into one searchable knowledge base and chat experience.",
      "Released a live product that combines practical daily utilities, personal organization, and guidance in one place.",
      "Built a companion admin tool so the knowledge base can be maintained as policies and information change.",
    ],
    designDirection:
      "Dark UI (near-black background, light text) using SF Pro Display for the interface paired with Arabic calligraphic display faces (Amiri, Scheherazade New) for Arabic-script content , a deliberate pairing that keeps the product feeling technical and modern while staying visually anchored to Islamic/Arabic-script material.",
    technicalBuild:
      "React + Vite + TypeScript frontend, Express.js backend, Supabase for auth and data, Tailwind CSS, Playwright/Vitest for testing, deployed on Vercel and Railway.",
    challenges:
      "Curating and structuring genuinely reliable answers (residency and visa rules change) is a harder problem than the chat interface itself , accuracy depends on an internal admin tool (AINA Scraper) that keeps the knowledge base current.",
    lessons:
      "A community AI product lives or dies on the quality of what feeds it, not the chat UI , which is why a companion internal tool for knowledge management was necessary from day one.",
    subProjects: [
      {
        title: "AINA Scraper",
        description:
          "The internal, login-gated admin tool AINA's team uses to manage and update the knowledge base its chat assistant draws answers from.",
        url: "https://ainascraper.vercel.app",
      },
      {
        title: "AINA Investor",
        description:
          "A public transparency report for prospective AINA investors, itemizing fund allocation across launch, operations, and growth, with a live funding-progress bar.",
        url: "https://transparancyaina.vercel.app",
      },
      {
        title: "Proposal AINA",
        description:
          "An interactive, scroll-driven pitch deck walking collaborators and sponsors through AINA's problem, system architecture, and roadmap.",
        url: "https://proposalaina.vercel.app",
      },
    ],
  },
  {
    title: "Kelas AIGYPT",
    slug: "kelas-aigypt",
    shortDescription:
      "A cohort-based AI literacy course for Masisir, plus an ongoing membership content library.",
    summary:
      "An AI education platform running structured, batch-based cohorts that teach Masisir how to actually use AI for academic work, organizations, business, and content , alongside a self-paced membership library.",
    category: ["AI", "Education"],
    type: "AI Education Platform",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://aigypt.id",
    brandColor: "#0a0a0f",
    cover: "/aigypt-laptop-v4.jpg",
    gallery: [
      "/aigypt-laptop.png",
      "/kelas-aigypt-gallery-1.webp",
      "/kelas-aigypt-gallery-2.webp",
      "/kelas-aigypt-gallery-3.webp",
    ],
    problem:
      "Most Masisir have used ChatGPT casually, but there's a large gap between casual use and using AI well for academic study, organizational work, business, or content creation.",
    productThinking:
      "AIGYPT frames its audience by role , Akademisi, Organisator, Pebisnis, Kreator, Pencari , rather than by skill level, and builds curriculum around what each of those people actually needs AI to do for them.",
    solution:
      "A cohort program (running in numbered batches, mixing offline and online sessions) covering AI fundamentals and mindset, prompting, academic AI use, organizational/business AI use, and a \"Vibe Coding\" module, with before/after use-case examples, named alumni testimonials, and two membership tiers , a self-paced library and a full cohort track with certification. Membership bundles access to two sibling products, Talqeeh and Deenme.",
    outcomes: [
      "Created one learning product that connects cohort delivery, a self-paced membership library, and sister-product access.",
      "Translated broad AI curiosity into role-specific learning paths for academics, organizers, businesses, creators, and seekers.",
      "Shipped a production course platform rather than a one-off event page.",
    ],
    designDirection:
      "Dark theme, Inter throughout , consistent with the wider AINA/AIGYPT product family's visual identity.",
    technicalBuild:
      "React/Vite front-end with structured course content, membership flows, and a production-ready deployment setup.",
    lessons:
      "Bundling AIGYPT membership with access to Talqeeh and Deenme shows the value of treating these as one ecosystem for the same community rather than isolated products.",
    subProjects: [
      {
        title: "AIGYPT Games",
        description:
          "A mini-app hub of gamified AI challenges (an AI Poster Challenge and a prompt-building game) that reward participation with AINA access, used as a softer alternative to a direct signup funnel.",
        url: "https://aigyptgames.vercel.app",
      },
      {
        title: "Introducing AIGYPT & AINA",
        description:
          "A chaptered, scroll-driven origin-story site introducing the AIGYPT community and the AINA product together to Masisir who haven't encountered either yet.",
        url: "https://introaigypt.vercel.app",
      },
    ],
  },
  {
    title: "Talqeeh",
    slug: "talqeeh",
    shortDescription:
      "A curated AI prompt library that helps Masisir study Al-Azhar's actual course material.",
    summary:
      "An AI study-companion platform built around Al-Azhar's own \"Muqarrar\" curriculum , a structured library of subject-specific prompts and a bank of real past exam questions with matching answer prompts.",
    category: ["AI", "Education"],
    type: "AI × Islamic Study / Education Web App",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://talqeeh.vercel.app",
    brandColor: "#0c0c0c",
    cover: "/talqeeh-laptop-v4.jpg",
    gallery: [
      "/talqeeh-laptop.png",
      "/talqeeh-feature-1.png",
      "/talqeeh-feature-2.png",
      "/talqeeh-feature-3.png",
      "/talqeeh-feature-4.png",
      "/talqeeh-feature-5.png",
      "/talqeeh-feature-6.png",
      "/talqeeh-feature-7.png",
    ],
    problem:
      "Generic AI assistants don't know Al-Azhar's specific Muqarrar (course material) or how it's actually examined, so Masisir get generic answers instead of study help that matches what they're tested on.",
    solution:
      "A membership platform organizing prompt templates across Al-Azhar's subject areas , six categories spanning Ushuluddin & Qur'an, Hadits & Mustholah, Syariah & Fiqh, Aqidah & Pemikiran, Lughah Arabiyah, and Tarikh/Dakwah/Tarbiyah , plus a gated bank of real past exam questions paired with matching answer-prompt templates, per-subject AI tool recommendations, and a 5-question onboarding flow to build a learning profile. One free subject is usable without signup.",
    outcomes: [
      "Organized Al-Azhar-specific study support into a searchable, subject-based prompt and exam-question library.",
      "Gave learners a structured route from onboarding to course-specific AI guidance instead of generic prompting.",
      "Released a focused membership product around real course material and exam context.",
    ],
    designDirection:
      "Near-black background with a distinctive mixed type system , DM Sans for UI, Crimson Pro serif and JetBrains Mono for accents, and Arabic display faces (Noto Naskh Arabic, Reem Kufi, Aref Ruqaa, Noto Kufi Arabic) , giving it a more scholarly, editorial feel than the rest of the AINA/AIGYPT family.",
    technicalBuild:
      "JavaScript/Vite, Tailwind CSS, and an Express-style server powering a lightweight study platform focused on fast access to curated learning material.",
    lessons:
      "Specificity beats breadth , a prompt library scoped tightly to one institution's actual exam material is more useful to its audience than a general study-AI tool would be.",
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
    secondaryUrl: "https://markazfiqih.com",
    brandColor: "#7A1B1B",
    cover: "/markaz-cover-v2.png",
    gallery: [
      "/markaz-feature-1.png",
      "/markaz-feature-2.png",
      "/markaz-feature-3.png",
      "/markaz-feature-4.png",
    ],
    problem:
      "Fiqh content online is often scattered and inconsistent about which scholarly opinion it's presenting, making it hard for everyday Indonesian Muslims to learn systematically rather than picking up fragments.",
    productThinking:
      "The platform is positioned explicitly as \"Tempat Belajar Fiqih Madzhab Syafi'i Yang Sistematis dan Terstruktur\" , structured learning with a clear reference hierarchy (primary madzhab opinion → weaker opinion → scholarly ikhtiyar → other madzhab views) , and built as a full e-commerce learning product, not a marketing page, because the audience needed to browse, pay, and actually study in one place.",
    solution:
      "A course catalog with bundles and level filters, multi-method checkout (QRIS, e-wallet, virtual account, card) via the Mayar.id gateway, a student dashboard with progress auto-save, lifetime access and certificates, a separate ebook catalog, and instructor profiles for the two Al-Azhar-based teachers behind the courses.",
    outcomes: [
      "Brought course discovery, payment, student progress, certificates, and ebooks into one learning product.",
      "Connected multiple Indonesian payment methods through a production payment gateway and webhook flow.",
      "Created a complete visual identity and storefront that makes structured Shafi'i learning feel credible online.",
    ],
    designDirection:
      "A custom logo mark , an open book whose page-folds double as a mosque-gable silhouette with a gold diamond center , in a deep maroon (#7A1B1B) and mustard-gold (#C9A227) system on cream/white. Headlines use a serif display face; body text pairs Plus Jakarta Sans with Inter. A full favicon and Open Graph asset set was built alongside the product, not left as defaults.",
    technicalBuild:
      "React + Vite + TypeScript frontend with Tailwind CSS v4 and shadcn/ui conventions; Express 5 + Drizzle ORM backend; Supabase (Postgres + Edge Functions) for data and payment webhooks; Mayar.id payment gateway; pnpm monorepo; deployed on Vercel.",
    challenges:
      "Integrating a real Indonesian payment gateway (webhooks, payment-status tracking, multiple payment methods) into a learning platform is a materially different problem from a typical course-marketing site.",
    lessons:
      "Brand identity and product UX aren't separable on a project like this , the visual system (a purpose-designed logo, a considered color and type pairing) is part of what makes the platform feel trustworthy for a religious-education audience.",
  },
  {
    title: "Deenme",
    slug: "deenme",
    shortDescription:
      "A personal Islamic worship tracker , prayers, dhikr, and daily reflection with a gamified streak system.",
    summary:
      "A personal ibadah (worship) tracker PWA , its own manifest describes it simply as a \"Personal Ibadah Tracker\" , logging daily prayers, dhikr, and reflection with a rank/streak system.",
    category: ["Product", "AI"],
    type: "Education Web App",
    status: "development",
    confidence: "partial",
    featured: true,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    brandColor: "#3ecf8e",
    cover: "/deenme-laptop-v2.png",
    problem:
      "Per the app's own landing copy: staying consistent (istiqamah) with daily prayer, dhikr, and reflection is hard without a way to track it , \"satu hari satu langkah\" (one day, one step).",
    solution:
      "A prayer tracker logging the five daily prayers as on-time/late/qadha with auto-generated schedules (Egyptian Authority or Indonesian KEMENAG calculation methods), post-prayer dhikr/dua guidance with Arabic text and transliteration, a 50+ prayer \"Bank Doa,\" a daily reflection journal with AI-assisted tidy-up and dream interpretation, and a statistics view with A–F grading, a calendar heatmap, and an 8-tier gamified rank system from \"Mubtadi\" to \"Ulul Albab.\" An invite-only \"Talqeeh\" membership tier is referenced but not further explained in the accessible code.",
    designDirection:
      "A dark, deep-green canvas with a mint/emerald accent (#3ecf8e), lime highlight, and cream text, using Bricolage Grotesque for display type paired with IBM Plex Sans Arabic for Arabic script , a modern grotesque with genuine Arabic-script support.",
    technicalBuild:
      "React + Vite, Express server, Supabase, PWA manifest, and Vercel deployment, structured around daily tracking, authentication, and persistent user progress.",
    notes:
      "Best framed as an in-progress personal product: the foundation is already shaped around daily worship tracking, persistent progress, and a habit loop that can grow into a fuller Islamic productivity system.",
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
    brandColor: "#131313",
    cover: "/umrahme-cover-v3.png",
    gallery: [
      "/umrahme-gallery-1.webp",
      "/umrahme-gallery-2.webp",
      "/umrahme-gallery-3.webp",
    ],
    problem:
      "During an actual Umrah trip, pilgrims get separated during Tawaf or Sa'i, muthowwif (guides) field the same \"where are we going today\" question over and over, Miqat/ihram instructions get missed, and key logistics get buried in WhatsApp group chat.",
    productThinking:
      "Rather than selling directly to pilgrims, Umrahme sells to the travel agencies that already have the pilgrim relationship , the agency licenses the app, puts its own branding on it, and hands it to its pilgrims for the trip. That business model shapes the whole product: it has to be fully white-labelable with no Umrahme branding visible to the end pilgrim.",
    solution:
      "A companion app covering all 54 prayers (Arabic, transliteration, translation), an automatic Tawaf and Sa'i counter, a four-module interactive manasik (ritual training) course with progress tracking, a step-by-step ibadah guide, a map of 33 historical and pilgrimage sites, real-time prayer times by location, an Umrah fiqh FAQ and glossary, agency-pushed announcements and a daily agenda, a digital pilgrim ID card, a personal travel journal, and a digital Umrah certificate , plus an agency-side admin portal for managing batches, pilgrims, agenda, and announcements. Priced at 10 SAR per pilgrim, free for official travel-crew partners, no setup or monthly fee.",
    outcomes: [
      "Turned repeated pilgrim questions, travel guidance, and daily logistics into a single trip companion product.",
      "Built a white-label model so travel agencies can use their own identity across the pilgrim-facing experience.",
      "Paired the pilgrim app with an agency portal for batches, jamaah, agendas, and announcements.",
    ],
    designDirection:
      "Warm cream background with near-black, fully pill-shaped call-to-action buttons in white text, set in Plus Jakarta Sans throughout , a clean, minimal SaaS look rather than an ornate religious-iconography style.",
    technicalBuild:
      "pnpm monorepo, React 19 + Vite frontend, Express 5 API, Supabase (auth/data/storage) with Drizzle ORM, TypeScript, deployed on Vercel.",
    challenges:
      "Building a genuinely white-label product , every surface a pilgrim sees has to carry the agency's brand, not Umrahme's , is a different engineering problem than a normal consumer app.",
    lessons:
      "Selling to the operator instead of the end user changes what the product actually needs to be: multi-tenant branding and an admin/batch-management layer become as core as the pilgrim-facing features themselves.",
  },
  {
    title: "Temantiket",
    slug: "temantiket",
    shortDescription:
      "Visa on Arrival processing and airport concierge service for Indonesian travelers landing in Cairo.",
    summary:
      "Temantiket's public-facing storefront: Visa on Arrival (VOA) processing and full airport concierge (gate pickup, immigration escort, language assistance) for Indonesian travelers arriving at Cairo Airport.",
    category: ["Travel", "Client Work"],
    type: "Travel Service Website",
    status: "production",
    confidence: "verified",
    featured: true,
    year: "2025",
    liveUrl: "https://voatemantiket.site",
    cover: "/temantiket-cover-v2.png",
    gallery: [
      "/temantiket-feature-1.png",
      "/temantiket-feature-2.png",
      "/temantiket-feature-3.png",
      "/temantiket-feature-4.png",
    ],
    problem:
      "Indonesian travelers landing in Cairo face an unfamiliar immigration process, potential language barriers, and queues at Visa on Arrival, with no guaranteed help on the other side of the gate.",
    solution:
      "A service site covering VOA processing, gate pickup with staff holding nameplates, full airport escort from arrival through immigration to exit, and language assistance, so travelers don't need to speak Arabic or English. Pricing is tiered by group size (solo, 2-6, 7-12, 12+), with a 50% deposit upfront. Airlines served include Egypt Air, Turkish Airlines, Emirates, Etihad, and flydubai across Cairo Airport's three terminals.",
    outcomes: [
      "Made Visa on Arrival support, airport pickup, immigration assistance, and service pricing clear before a traveler lands.",
      "Created a direct path from service discovery to WhatsApp consultation for Indonesian travelers arriving in Cairo.",
      "Extended the public service layer with operational sibling tools for staff workflows and ticket generation.",
    ],
    designDirection:
      "Clean, modern layout with blue/teal accents on white, a testimonial carousel, and professional photography of the actual airport operations.",
    notes:
      "This is the public storefront for the wider Temantiket operation; the internal admin portal and the ticket-generator tool are separate sibling tools (see below).",
    subProjects: [
      {
        title: "Temantiket Center",
        description:
          "The internal, login-gated admin portal Temantiket's staff use for jamaah tracking, package cost calculation, document management, and passport OCR.",
        url: "https://temantiket.vercel.app",
      },
      {
        title: "Temantiket Ticket Generator",
        description:
          "A public tool that generates professional, IATA-style flight e-tickets for travel agents, with real-time preview and export to PNG, PDF, or WhatsApp-formatted messages.",
        url: "https://temantiket-redesign.vercel.app",
      },
    ],
  },
  {
    title: "IGH Tour",
    slug: "igh-tour",
    shortDescription: "A travel/Umrah operations web app for handling agency workflows in one focused dashboard.",
    summary:
      "A travel and Umrah/Hajj operations web app for centralizing agency workflows, built around the same operational depth as the Temantiket internal tooling.",
    category: ["Travel", "Web Apps"],
    type: "Travel Web App",
    status: "development",
    confidence: "incomplete",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://ightour.vercel.app",
    hideLiveUrl: true,
    cover: "/igh-tour-cover-v1.png",
    notes:
      "Presented as an in-development operations product: the project direction is clear, with the focus on turning repeated travel-agency admin work into a structured internal system.",
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
    cover: "/dreammecca-cover-v1.png",
    gallery: [
      "/dreammecca-gallery-1.webp",
      "/dreammecca-gallery-2.webp",
      "/dreammecca-gallery-3.webp",
    ],
    problem:
      "Indonesia's Umrah travel market has a real trust problem , the site leads directly with license verification to counter \"banyak berita penipuan travel Umroh\" (frequent news of Umrah travel scams).",
    solution:
      "A content-rich marketing site opening with PPIU/Kemenag license and HIMPUH membership verification, a facilities list (certified Al-Azhar- and Madinah-Islamic-University-trained guides, 4–5 star hotels near both holy mosques, free visa processing, professional photography), a pilgrim equipment/kit list, departure-batch photo galleries, testimonials, an FAQ, and direct WhatsApp contact with a physical Jakarta office address.",
    designDirection:
      "Warm cream background, Plus Jakarta Sans body text, a custom serif-style display face for white headline text over photo heroes, and deep navy/indigo text on white pill CTA buttons , a polished, editorial travel-agency look.",
    technicalBuild:
      "pnpm workspace monorepo , React + Vite frontend, Express API, PostgreSQL with Drizzle ORM, Zod, Orval for API codegen.",
  },
  {
    title: "Itinerary Mesir",
    slug: "itinerary-mesir",
    shortDescription:
      "A personalized, Temantiket-branded digital itinerary built for one client's Egypt trip.",
    summary:
      "A bespoke, single-client digital itinerary microsite , a Temantiket-branded deliverable for one named family's 10-day Egypt and Umrah trip.",
    category: ["Travel", "Client Work"],
    type: "Digital Travel Itinerary",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://itinerarymesir.vercel.app",
    hideLiveUrl: true,
    cover: "/itinerary-mesir-cover-v1.png",
    gallery: [
      "/itinerary-mesir-gallery-1.webp",
      "/itinerary-mesir-gallery-2.webp",
    ],
    solution:
      "A day-by-day 10-day itinerary (Kuala Lumpur → Cairo → Giza → Luxor → Cairo → Alexandria → Jeddah → Makkah Umrah → Jakarta) addressed directly to the traveling family by name, with per-day detail pages, travel tips, a local food guide, a landmark list with map links, and a closing personal message , branded throughout as a Temantiket deliverable rather than a standalone product.",
    designDirection:
      "Warm off-white background, Outfit for body text, Playfair Display serif for the large white hero headline over a photo , a premium, editorial travel-magazine feel.",
    technicalBuild: "React + TypeScript + Vite + Tailwind CSS with shadcn/ui, deployed on Vercel.",
    notes:
      "Best framed as a personalized itinerary product Temantiket builds for individual clients, rather than an independent brand of its own.",
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
    cover: "/el-massa-system-cover-v1.png",
    problem:
      "El Massa Tour & Travel needed operational tooling shaped around how the business actually runs, rather than a generic off-the-shelf travel CRM.",
    productThinking:
      "As a client-delivered internal system, this project centers on translating a specific travel agency's real operational workflow into software, rather than shipping a general-purpose product.",
    solution:
      "A custom internal system for El Massa Tour & Travel's operations.",
    notes:
      "This is a client-delivered internal system, so the public portfolio focuses on the product framing: mapping customer data, packages, bookings, participants, payments, staff, and admin work into one operational backbone.",
    subProjects: [
      {
        title: "El Massa Tour & Travel Logo",
        description:
          "A complete brand-identity presentation for El Massa's diamond-and-compass mark: logo concept, color and type system, and mockups across banners, business cards, and stationery.",
        url: "https://elmassa-logo.vercel.app",
      },
      {
        title: "Itinerary El Massa",
        description:
          "A multi-departure Umrah itinerary hub listing El Massa's scheduled departures, each linking through to a full day-by-day itinerary.",
        url: "https://elmassaitinerary.vercel.app",
      },
      {
        title: "El Massa Itinerary Portal 1448 H",
        description:
          "The new official itinerary portal for the 1448 H season: every package with its travel flow, a departure schedule table, and a day-by-day page per departure.",
        url: "https://elmassa-itinerarynew.vercel.app",
      },
    ],
  },

  // ───────────────────────────── MARKETPLACE & COMMUNITY ─────────────────────────────
  {
    title: "Nemsyi",
    slug: "nemsyi",
    shortDescription:
      "A discovery platform where Masisir find products, services, and community listings , then move to WhatsApp to transact.",
    summary:
      "A community marketplace and discovery platform for Masisir in Cairo , built so people arrive specifically looking for what they need, instead of scrolling past it in a WhatsApp group.",
    category: ["Product", "Web Apps"],
    type: "Community Marketplace / Product & Service Discovery Platform",
    status: "pre-launch",
    confidence: "partial",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#005B4F",
    cover: "/nemsyi-laptop-mockup.png",
    gallery: [
      "/nemsyi-laptop-mockup.png",
      "/nemsyi-feature-1.png",
      "/nemsyi-feature-2.png",
      "/nemsyi-feature-3.png",
      "/nemsyi-feature-4.png",
      "/nemsyi-feature-5.png",
      "/nemsyi-feature-6.png",
    ],
    problem:
      "In a WhatsApp group, people see whatever happens to pass by. Masisir looking for a specific product, service, or someone to bring something back from Indonesia have no dedicated place to search , only scattered, noisy group chats.",
    productThinking:
      "Nemsyi is deliberately scoped as a discovery layer, not a full transactional marketplace , no in-app wallet, chat, or payment infrastructure for buyer-seller transactions. Once someone finds what they need, they connect with the provider directly, usually over WhatsApp, keeping the product simple and the trust model familiar to the community.",
    solution:
      "A listings platform (Jelajahi/Explore) for products, services, and community posts, with the ability to post an ad, save listings, and track your own. A \"Sayembara\" feature lets people post a specific request or bounty for others to respond to. Sellers can pay for a Paket-Plus promoted listing through an integrated Indonesian payment gateway (Mayar) , the only money that moves through the platform itself. An admin dashboard handles listings, moderation, reports, and promotions.",
    designDirection:
      "A warm, cream-and-yellow marketing theme paired with a softer in-app palette , teal as the primary ink color with mint, pale-yellow, and pink accents , using Sora and Manrope for text and Black Han Sans for bold display headers.",
    technicalBuild:
      "Next.js 16, React 19, TypeScript, Supabase (auth/DB), Leaflet for map-based browsing, Tailwind CSS 4, deployed on Vercel.",
    challenges:
      "Keeping the product intentionally simple , resisting the pull to build in-app chat or payments , while still making discovery genuinely better than a WhatsApp group.",
    notes:
      "Pre-launch product: the important work here is the product decision to keep discovery simple, community-first, and close to the WhatsApp behavior people already trust.",
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
    featured: true,
    role: ["Full-Stack Development", "UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://anandaterranusantara-alpha.vercel.app",
    brandColor: "#B3372B",
    cover: "/aterria-laptop.png",
    gallery: [
      "/aterria-laptop.png",
      "/aterra-feature-1.webp",
      "/aterra-feature-2.webp",
      "/aterra-feature-3.webp",
      "/aterra-feature-4.webp",
    ],
    problem:
      "International buyers sourcing commodities like coffee, cinnamon, nutmeg, and charcoal briquettes need to trust an exporter's origin claims, certifications, and logistics before committing , hard to convey through a generic company site.",
    solution:
      "An editorial, document-styled site (\"FROM INDONESIAN SOIL TO THE WORLD\") presenting an interactive origin map across eight Indonesian coffee-growing regions, detailed lot-level coffee profiles (region, altitude, process, variety, tasting notes), a four-step export process, certifications (COO, ICO, Phytosanitary, Fumigation), and a direct export-inquiry form segmented by buyer country.",
    designDirection:
      "A cream background with near-black text and a terracotta/rust accent, built around a \"dossier\" aesthetic , heavy 900-weight Archivo headlines paired with IBM Plex Mono labels, reinforced by manifest-style section numbering (\"DOC 01 / ABOUT ATERRA\") that gives the whole site a stamped, official feel appropriate for an export business.",
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
    featured: true,
    role: ["UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://gallopmadinah.id",
    brandColor: "#AC8B39",
    cover: "/gallop-laptop.png",
    gallery: [
      "/gallop-laptop.png",
      "/gallop-feature-1.webp",
      "/gallop-feature-2.webp",
      "/gallop-feature-3.webp",
      "/gallop-feature-4.webp",
    ],
    problem:
      "Positioning a premium, family-safe desert experience in Madinah requires a brand that feels trustworthy and high-end at once, with clear pricing for a range of group sizes.",
    solution:
      "A dark, luxury-styled site presenting the \"Desert Horse Riding\" experience (an 8–10km, 1.5–2hr trek with an Arab rest stop), family-safety messaging, a full tiered price list by rider count and group size in SAR, add-ons like drone documentation and an Arabian Camp Experience, and a photo gallery.",
    designDirection:
      "Near-black background with off-white text and a warm gold/bronze accent, pairing Creato Display for body copy with the bold expanded display face Akira Expanded for navigation and labels , a premium, editorial desert-luxury feel.",
    notes:
      "The project is best read as a brand-and-experience build: positioning, pricing clarity, and visual trust carry as much weight as the booking flow itself.",
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
    featured: true,
    role: ["UI/UX", "Brand Design"],
    year: "2025",
    liveUrl: "https://valeoora.com",
    brandColor: "#FF8000",
    cover: "/valeoora-laptop.png",
    gallery: [
      "/valeoora-laptop.png",
      "/valeoora-feature-1.webp",
      "/valeoora-feature-2.webp",
      "/valeoora-feature-3.webp",
      "/valeoora-feature-4.webp",
    ],
    problem:
      "Pilgrims and travelers wanting professional photo/video coverage of an Umrah trip or an on-site wedding (akad nikah) need a service that feels both premium and trustworthy at sacred sites.",
    solution:
      "A cinematic dark site covering service packages across Makkah, Madinah, and Al Ula (including horseback and city-tour documentation and wedding/akad nikah coverage), an FAQ, a named \"Meet the Crew\" team section, and direct booking contact.",
    designDirection:
      "Near-black background, warm off-white text, and a vivid orange accent, built entirely around a single bold display face (CreatoDisplay) at a very large scale for the hero headline , an editorial, photography-portfolio feel.",
    notes:
      "The project is framed around premium service positioning: the site needed to make sacred-site documentation feel cinematic, organized, and easy to book.",
  },
  {
    title: "SYMP",
    slug: "symp",
    shortDescription: "Daru's own creative studio , productized branding, web, and content packages sold direct.",
    summary:
      "SYMP Studio is Daru's own design studio brand, selling fixed-price logo, brand kit, poster, social content, and web-development packages directly through a single pricing-page-style site.",
    category: ["Client Work", "Branding"],
    type: "Creative / Digital Service Website",
    status: "production",
    confidence: "verified",
    featured: true,
    role: ["Product Strategy", "UI/UX", "Brand Design", "Full-Stack Development"],
    year: "2025",
    liveUrl: "https://symp-us.vercel.app",
    brandColor: "#8A0202",
    cover: "/symp-laptop-mockup.png",
    gallery: [
      "/symp-laptop-mockup.png",
      "/symp-feature-1.png",
      "/symp-feature-2.png",
      "/symp-feature-3.png",
      "/symp-feature-4.png",
    ],
    problem:
      "Selling design and dev services to budget-conscious Indonesian small businesses works better with transparent, fixed pricing than an open-ended \"contact us for a quote.\"",
    solution:
      "A long-scroll, SaaS-pricing-page-style site with tiered packages for logo design, brand kits, posters, Instagram carousel content, landing-page websites, and hosting/maintenance , each with fixed IDR pricing, a 4-step ordering process, and WhatsApp-based ordering.",
    designDirection:
      "Poppins throughout at a bold, large scale, with a maroon primary accent and a yellow secondary accent over a light neutral background , closer to a SaaS pricing page than a typical creative-studio portfolio.",
    technicalBuild: "The site itself states its own web-package stack: React JS + Tailwind CSS.",
    notes:
      "SYMP Studio is the same studio credited in the footer of the El Massa and MideastLens brand-presentation sites, and its founder bio names Daru directly, confirming this is the umbrella brand for the designer's own branding/web/merchandise services.",
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
    cover: "/rudy-alfarizi-cover-v1.png",
    gallery: [
      "/rudy-alfarizi-gallery-1.webp",
      "/rudy-alfarizi-gallery-2.webp",
      "/rudy-alfarizi-gallery-3.webp",
    ],
    technicalBuild:
      "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, and Vercel deployment.",
    notes:
      "A compact client portfolio built to give a professional guide a more credible online presence, with a clean path from profile to inquiry.",
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
    featured: true,
    role: ["Full-Stack Development", "UI/UX"],
    year: "2025",
    liveUrl: "https://darcia.id",
    githubUrl:
      "https://github.com/darciatemantaraglobal-gif/darcia-digital-invitations",
    cover: "/darcia-laptop.jpg",
    gallery: [
      "/darcia-laptop.jpg",
      "/darcia-feature-1.webp",
      "/darcia-feature-2.webp",
      "/darcia-feature-3.webp",
      "/darcia-feature-4.webp",
    ],
    technicalBuild:
      "Vite, TypeScript, React, shadcn-ui, Tailwind CSS, and Vercel deployment.",
    notes:
      "A focused product build for a premium invitation experience, balancing polished presentation with a simple digital delivery flow.",
    subProjects: [
      {
        title: "Der Invoice",
        description:
          "A free, no-login invoice generator with a side-by-side editor and live preview, exportable to PDF or PNG.",
        url: "https://derinvoice.lovable.app",
      },
      {
        title: "Der Life OS",
        description:
          "A personal operating system in active development, unifying finance, client/project tracking, invoicing, and daily habits into one dashboard.",
        url: "https://github.com/hdmimesir-afk/darulifeos",
      },
    ],
  },

  // ───────────────────────────── OPERATIONS PLATFORMS (2026) ─────────────────────────────
  {
    title: "Hamasah International",
    slug: "hamasah-international",
    shortDescription:
      "A public website and internal portal for an Al-Azhar study-guidance program in Cairo, from enrollment to LMS and billing.",
    summary:
      "A full operations platform for Hamasah International, a study-guidance program for students heading to Al-Azhar. One system covers the public site, applicant enrollment, a staff console, guardian and student portals, an LMS, and billing, visa, and dormitory operations.",
    category: ["Education", "Internal Tools", "Client Work"],
    type: "Education Operations Platform / Web App",
    status: "client-delivery",
    confidence: "partial",
    featured: true,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#0c0c0c",
    cover: "/hamasah-cover-v1.png",
    gallery: [
      "/hamasah-international-gallery-1.webp",
      "/hamasah-international-gallery-2.webp",
      "/hamasah-international-gallery-3.webp",
      "/hamasah-international-gallery-4.webp",
      "/hamasah-international-gallery-5.webp",
      "/hamasah-international-gallery-6.webp",
      "/hamasah-international-gallery-7.webp",
    ],
    problem:
      "Running a study-abroad program means juggling applicant documents, guardian communication, student progress, invoices, visas, and dormitory stock across chat threads and spreadsheets. Each handoff between staff, guardians, and students is a place where something gets lost.",
    productThinking:
      "Instead of separate tools per task, the platform treats every group of people as a role with its own view of the same data: admin, enrollment officer, finance, supervisor, teacher, guardian, and student. Access per role is written down as a policy and covered by tests, so who can see what is checked rather than assumed.",
    solution:
      "A public site (programs, fees, articles, enrollment form) feeding an officer console with an applicant pipeline, document review, and ready-to-send WhatsApp messages. Applicants can track their status and re-upload files. Guardians and students get a portal with worship and memorization records, report cards, invoices, and receipts as PDFs. Teachers run an LMS with materials, assignments, and graded quizzes. Finance and admin handle numbered invoices, visa files, dormitory inventory, CSV imports, and an audit log of staff activity.",
    technicalBuild:
      "Node.js 22 with a single production dependency (pg), plain HTML, CSS, and JavaScript served by the same server (no build step, fast on weak connections), PostgreSQL on Supabase with ordered SQL migrations, private Supabase Storage buckets with signed links for applicant files, deployed to Vercel. Tests run on in-process PGlite in CI on Node 22 and 24, including an access-matrix test for every role.",
    challenges:
      "Handling applicants' identity documents and guardians' data means security is part of the product: a security-audit pass, a basic firewall, private file storage, and scripts that refuse to write to production without an explicit confirmation.",
    lessons:
      "Writing the permission model as data and testing it matters more than any single feature, because it is what lets a seven-role system keep changing safely.",
    outcomes: [
      "Replaced scattered chat-and-spreadsheet handling with one system from enrollment to alumni records.",
      "Gave seven roles their own views of the same data, backed by an automated access-matrix test.",
      "Kept production changes deliberate: a runbook, ordered migrations, and write-protected scripts.",
    ],
  },
  {
    title: "Barber Member System",
    slug: "barber-member-system",
    shortDescription:
      "A digital membership, POS, and 5-tier loyalty system for barbershops, with optional NFC onboarding at the cashier desk.",
    summary:
      "A PWA and QR-based membership system for barbershops: a digital loyalty card for customers, a fast cashier POS, tiered rewards from Silver to Black, and an owner dashboard across branches.",
    category: ["Product", "Web Apps", "Client Work"],
    type: "Membership & Loyalty Platform / PWA",
    status: "pre-launch",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#0c0c0c",
    cover: "/barber-member-cover-v1.png",
    gallery: [
      "/barber-member-system-gallery-1.webp",
      "/barber-member-system-gallery-2.webp",
      "/barber-member-system-gallery-3.webp",
      "/barber-member-system-gallery-4.webp",
    ],
    problem:
      "Paper punch cards get lost, and a barbershop owner cannot see which customers return, which barber they prefer, or what a discount really cost.",
    productThinking:
      "The cashier is the bottleneck, so the whole flow is designed around a transaction under a minute: scan the member's QR, pick the service and barber, redeem points. The offer is sold in three scopes, from a core MVP to a full PWA with an optional NFC stand, so a small shop can start small.",
    solution:
      "A five-tab mobile PWA (home with member card and tier progress, rewards, QR scan, products, store locator), a cashier POS, a daily cash-closing flow with blind counts, a barber performance view, and an owner dashboard with revenue and point-mutation audit. Members move up five tiers automatically as points accumulate.",
    technicalBuild:
      "Static mobile-first HTML with a self-hosted Supabase client so the till keeps working if the outside network is flaky. PostgreSQL 17 with row-level security on every table and anonymous access denied. An offline queue with client-generated UUIDs for idempotency, server-generated invoice numbers to avoid collisions across devices, and Asia/Jakarta day boundaries. Deployed on Vercel.",
    challenges:
      "A till has to keep working offline and still never double-count a sale, which is why the queue is idempotent and invoice numbering lives on the server.",
    lessons:
      "Writing the handover document (who enters where, what each role sees, what is still missing) is part of delivering the system, not an afterthought.",
    subProjects: [
      {
        title: "TapTapin",
        description:
          "A lighter loyalty app for small shops: customers tap an NFC tag or scan a QR, enter a WhatsApp number, and see their points; the cashier confirms each transaction from a dashboard. Built with Next.js 16, Drizzle ORM, Better Auth, and Supabase.",
      },
    ],
  },
  {
    title: "KPI PPMI Mesir Digital System",
    slug: "kpi-ppmi-mesir",
    shortDescription:
      "A digital system for a student organization in Egypt, designed from a 113-screen blueprint and built module by module.",
    summary:
      "A governance and operations system for KPI PPMI Mesir, covering tasks, meetings, finance, evaluation, knowledge, and handover. It is designed as a full blueprint first, then built in stages on a hosted Supabase backend under a strict confidentiality SOP.",
    category: ["Internal Tools", "Web Apps", "Client Work"],
    type: "Organization Operations System / Web App",
    status: "development",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#0c0c0c",
    cover: "/kpi-ppmi-mesir-cover-v1.png",
    gallery: [
      "/kpi-ppmi-mesir-gallery-1.webp",
      "/kpi-ppmi-mesir-gallery-2.webp",
      "/kpi-ppmi-mesir-gallery-3.webp",
      "/kpi-ppmi-mesir-gallery-4.webp",
    ],
    problem:
      "An organization whose leadership changes every period loses its working knowledge at each handover. Decisions, tasks, and records live in personal chats and files.",
    productThinking:
      "Before writing code, the scope was mapped as a blueprint: 113 screens, 61 entities, 11 flows, and 28 recorded decisions, together with a PRD and an execution roadmap with acceptance gates. Building in stages against that map keeps a large system honest about what is finished and what is not.",
    solution:
      "A portal with a task board, meetings with voting, finance, evaluation, a knowledge base, handover records, and bilingual article publishing, with an audit trail and role-based access.",
    technicalBuild:
      "Next.js with TypeScript, Supabase (Auth, PostgreSQL with row-level security), deployed on Vercel. Local development uses synthetic TEST data only; hosted environments follow a confidentiality SOP, and organization data is never used to train AI models.",
    challenges:
      "Being exact about status: passing tests and a successful build do not mean a workflow has been accepted. Activation of periods, official mandates, and multi-role user testing are tracked as separate gates.",
    lessons:
      "For sensitive organizational data, the data rules (what never enters the repository) belong in the product spec from day one.",
    notes:
      "In development. Shown here as a case study of the planning and staged delivery; no organization data is displayed.",
  },

  // ───────────────────────────── 2026 ADDITIONS ─────────────────────────────
  {
    title: "PGS Tour & Travel",
    slug: "pgs-tour",
    shortDescription:
      "A rebuilt website for an Umrah travel agency in Serang, Banten, replacing its old WordPress site.",
    summary:
      "A new site for PGS Tour & Travel (Pesona Global Syiarbaitullah), built from scratch to replace a WordPress site: Umrah programs with prices and itineraries, visa services, a pilgrim gallery, partnership, company profile, and a consultation form that lands in WhatsApp.",
    category: ["Travel", "Client Work"],
    type: "Travel Agency Website",
    status: "pre-launch",
    confidence: "verified",
    featured: false,
    role: ["UI/UX", "Full-Stack Development"],
    year: "2026",
    liveUrl: "https://pgstour.vercel.app",
    brandColor: "#223089",
    cover: "/pgs-tour-cover-v1.png",
    gallery: [
      "/pgs-tour-gallery-1.webp",
      "/pgs-tour-gallery-2.webp",
      "/pgs-tour-gallery-3.webp",
      "/pgs-tour-gallery-4.webp",
    ],
    problem:
      "The agency's WordPress site was hard to update and did not show what pilgrims ask first: which program, what it costs, what is included, and how to book.",
    solution:
      "Program pages with prices, day-by-day itineraries and facilities, separate pages for visa services, partnership, and the company's licences, and a consultation form that opens a pre-filled WhatsApp chat. All prices and texts live in two content files, so the agency can edit them without touching components.",
    designDirection:
      "Navy and cyan taken from the PGS logo, an editorial layout framed in rounded navy cards, a dark hero on every page, and one bold grotesk family (Hanken Grotesk) for headings and text.",
    technicalBuild:
      "Next.js 16 (App Router, TypeScript) and Tailwind CSS v4, no database; the consultation form hands off to WhatsApp. Deployed on Vercel.",
  },
  {
    title: "PERISA Azhariyah",
    slug: "perisa-azhariyah",
    shortDescription:
      "A game-based Arabic learning platform for elementary to high-school students, run by an Islamic foundation.",
    summary:
      "An LMS for Yayasan Peradaban Islam Azhariyah that teaches Arabic from everyday vocabulary to free conversation, with mini-games, voice practice, protected lesson videos, and a foundation dashboard for progress and certificates.",
    category: ["Education", "Product", "Client Work"],
    type: "Education Platform / PWA",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    liveUrl: "https://presentasiyayasan.vercel.app",
    brandColor: "#008E82",
    cover: "/perisa-azhariyah-cover-v1.png",
    gallery: [
      "/perisa-azhariyah-gallery-1.webp",
      "/perisa-azhariyah-gallery-2.webp",
      "/perisa-azhariyah-gallery-3.webp",
    ],
    problem:
      "Arabic is often taught as grammar to memorise, so students find it hard and boring and rarely get to speaking it.",
    productThinking:
      "The curriculum is a ladder of four stages, from everyday vocabulary to free conversation, and every game follows the same ladder. Login is a WhatsApp number and a PIN set by the foundation, because the students are children and their parents use WhatsApp, not passwords.",
    solution:
      "A student app with staged vocabulary lessons, mini-games with XP and badges, a voice conversation practice, and lesson videos with a floating watermark of the student's name. Foundation staff get a dashboard for learning progress, donation records, and QR-verified certificates, plus a tutorial for admins, teachers, and parents.",
    designDirection:
      "A clean white theme in the foundation's turquoise and warm gold, set in Plus Jakarta Sans.",
    technicalBuild:
      "Plain ES modules without a build step, installable as a PWA with a service worker and offline page, backed by Supabase; certificates are generated in the browser as PDF.",
  },
  {
    title: "KAEL",
    slug: "kael",
    shortDescription:
      "A modular digital toolkit for small businesses: reviews, ordering, POS, and finance, sold as simple packages.",
    summary:
      "KAEL (Kemudahan Akses, Efisiensi, Layanan) is a digital ecosystem for Indonesian small businesses, grown out of TapTapin. Owners start with one tool, such as an NFC review stand or a POS, and add more as the business grows.",
    category: ["Product", "Web Apps"],
    type: "Small Business Platform / Website",
    status: "production",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    liveUrl: "https://kaels.site",
    brandColor: "#5b3fd1",
    cover: "/kael-cover-v1.png",
    gallery: [
      "/kael-gallery-1.webp",
      "/kael-gallery-2.webp",
      "/kael-gallery-3.webp",
      "/kael-gallery-4.webp",
    ],
    problem:
      "Most small shops still run on WhatsApp, spreadsheets, and paper. They do not have time to learn complex software and do not know where to start.",
    productThinking:
      "Instead of one big system, KAEL sells modules a shop can buy one at a time. The pricing page is treated as the contract: the module specification follows what is already promised there to buyers.",
    solution:
      "A sales site with a catalogue of modules (reviews, POS and ordering, finance), a calculator that estimates extra revenue and reviews from the shop's own numbers, and three packages from Starter to Ultimate, plus a portal login for customers.",
    technicalBuild:
      "Deployed on Vercel at its own domain, with the product specification split into modules that can be built and shipped separately.",
  },
  {
    title: "Elevgro",
    slug: "elevgro",
    shortDescription:
      "A SaaS concept for running a whole business in one place, from POS and bookkeeping to WhatsApp CRM and payroll.",
    summary:
      "A landing page and interactive demo for Elevgro, a concept for an integrated business platform with seven modules: POS, bookkeeping and tax, WhatsApp CRM, HR and payroll, promotion broadcasts, approval workflows, and warehouse stock.",
    category: ["Product", "Web Apps"],
    type: "SaaS Landing Page / Product Concept",
    status: "concept",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "UI/UX", "Full-Stack Development"],
    year: "2026",
    liveUrl: "https://elevgro.vercel.app",
    brandColor: "#0057d9",
    cover: "/elevgro-cover-v1.png",
    gallery: [
      "/elevgro-gallery-1.webp",
      "/elevgro-gallery-2.webp",
      "/elevgro-gallery-3.webp",
      "/elevgro-gallery-4.webp",
    ],
    problem:
      "Growing businesses juggle separate tools for the till, the books, customer chats, and staff, and none of them talk to each other.",
    solution:
      "A site that lets visitors try the modules in place: tabs switch between them, a live interface demo changes to a phone layout on mobile, and a four-step onboarding path and business insight articles explain how to start.",
    designDirection:
      "A light SaaS look in a single strong blue, Plus Jakarta Sans, and a phone mockup with a gentle 3D tilt in the hero.",
    technicalBuild: "React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion, deployed on Vercel.",
  },
  {
    title: "Katalis ERP",
    slug: "katalis-erp",
    shortDescription:
      "An ERP for a fish-processing exporter: purchasing, quality checks, production per loin, cold storage, sales, and profit per cycle.",
    summary:
      "A record-keeping system for PT Katalis Lintas Global that follows fish from purchase and quality check through production by loin, cold storage, and sales, to a profit and loss report for each cycle, on phone and desktop.",
    category: ["Internal Tools", "Web Apps", "Client Work"],
    type: "ERP / Web App",
    status: "development",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#0f2236",
    cover: "/katalis-erp-cover-v1.png",
    gallery: [
      "/katalis-erp-gallery-1.webp",
      "/katalis-erp-gallery-2.webp",
      "/katalis-erp-gallery-3.webp",
      "/katalis-erp-gallery-4.webp",
      "/katalis-erp-gallery-5.webp",
    ],
    problem:
      "In fish processing, margin is decided by yield: how many kilos of loin come out of each kilo bought. Without per-batch records, the owner only finds out at the end of a cycle whether it made money.",
    solution:
      "An owner dashboard with stock, yield, cash, and decisions waiting for approval, and modules for purchasing, quality, production with a yield chart per tail, stock by lot, cold storage, sales, finance, and reports. A demo with sample data was built first so the client could test the flow on desktop and phone.",
    technicalBuild:
      "Next.js 16 with React 19, Tailwind CSS 4, and strict TypeScript; Supabase for database, auth, and storage; Zod validation; offline drafts with Dexie; tests in Vitest, Playwright, and pgTAP.",
    notes:
      "In development: the demo shown here uses sample data; the production build is at its foundation phase.",
  },
  {
    title: "OSLO Park Property Handbook",
    slug: "oslo-park",
    shortDescription:
      "An interactive digital handbook for a residential cluster, with real page turns, a thumbnail index, and zoomable renders.",
    summary:
      "A digital monograph for OSLO Park, Cluster Ostbanehallen by PT. Trisan Esa Cipta, built from the client's layout manual: the developer profile, architecture concept, master plan, the Type 112 unit, and a consultation sheet, presented as a book you can leaf through.",
    category: ["Branding", "Client Work"],
    type: "Digital Property Catalogue",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["UI/UX", "Brand Design", "Full-Stack Development"],
    year: "2026",
    brandColor: "#cc9933",
    cover: "/oslo-park-cover-v1.png",
    gallery: [
      "/oslo-park-gallery-1.webp",
      "/oslo-park-gallery-2.webp",
      "/oslo-park-gallery-3.webp",
    ],
    problem:
      "A property catalogue is usually a PDF that buyers scroll past. The developer wanted the feel of a printed hardcover book, but shareable as a link.",
    solution:
      "A two-page spread view with page-turn animation driven by buttons, page corners, arrow keys, or swipe; a page scrubber and thumbnail drawer; a lightbox for architectural renders; and paper sounds generated with the Web Audio API, with no audio files.",
    designDirection:
      "Scandinavian editorial: Book Antiqua headings with Poppins text, generous white space, dashed blueprint-style callouts, and the Oslo gold line and page stamp on every page.",
    technicalBuild:
      "A static HTML, CSS, and JavaScript site that also opens offline, plus Python scripts that produce a print-ready PDF.",
  },
  {
    title: "Masisir Life",
    slug: "masisir-life",
    shortDescription:
      "A life-simulation game about an Indonesian student's first days in Cairo: study, work, and get to know the district.",
    summary:
      "A browser game set in Hayy Al-Bidayah, a district modelled on student life in Cairo. The player manages hunger, energy, money, knowledge, reputation, and relationships while following talaqqi lessons and quests around the map.",
    category: ["Experiments", "Product"],
    type: "Browser Game",
    status: "development",
    confidence: "partial",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#b9803a",
    cover: "/masisir-life-cover-v1.png",
    gallery: ["/masisir-life-gallery-1.webp"],
    problem:
      "New Masisir arrive knowing little about daily life in Cairo; most of it is learned the hard way in the first months.",
    solution:
      "A game loop of days and hours: the player chooses where to go on the district map, what to study, and how to spend limited Egyptian pounds, with a journal of quests and a save system.",
    technicalBuild:
      "TypeScript and Vite, with a game design document, milestone validation notes, and automated Playwright playtests that check pacing.",
    notes: "In development; shown from the current web build.",
  },
  {
    title: "Jalan Cahaya Digital Reader",
    slug: "jalan-cahaya",
    shortDescription:
      "A protected online reader that lets an author sell a digital book without handing over the PDF.",
    summary:
      "A reading site for the book Jalan Cahaya by Umi Atiyah: buyers open the book with a personal access code, and the author has an admin panel to record sales and issue codes.",
    category: ["Product", "Client Work"],
    type: "Digital Book Reader",
    status: "client-delivery",
    confidence: "verified",
    featured: false,
    role: ["Product Strategy", "Full-Stack Development", "UI/UX"],
    year: "2026",
    brandColor: "#7c4ddb",
    cover: "/jalan-cahaya-cover-v1.png",
    problem:
      "Selling a book as a PDF means the first buyer can share the file with everyone.",
    solution:
      "The book is stored encrypted, so there is no PDF to download, and it opens in the browser only with a valid access code. The admin panel generates a unique code per buyer with their WhatsApp number, warns about duplicates, keeps a sales ledger, and shows a red alert if a raw PDF is still publicly reachable.",
    technicalBuild:
      "A lightweight static site with a browser-side encryption tool for the book file and a small database for access codes and sales.",
  },
];

/** Merges in the Indonesian translation overlay when locale is "id"; falls back to English for any untranslated field. */
function localize(project: Project, locale: string): Project {
  if (locale !== "id") return project;
  const overlay = idTranslations[project.slug];
  return overlay ? { ...project, ...overlay } : project;
}

/** Strips every external URL, so pages and client props only learn which locked links exist. */
function toPublic(project: Project, locale: string): Project {
  const { liveUrl, secondaryUrl, githubUrl, ...rest } = localize(project, locale);
  return {
    ...rest,
    lockedLinks: {
      live: Boolean(liveUrl && !project.hideLiveUrl),
      secondary: Boolean(secondaryUrl),
      github: Boolean(githubUrl),
    },
    subProjects: rest.subProjects?.map(({ title, description }, i) => ({
      title,
      description,
      hasLink: Boolean(project.subProjects?.[i]?.url),
    })),
  };
}

export function getAllProjects(locale: string = "en") {
  return projects.map((p) => toPublic(p, locale));
}

export function getFeaturedProjects(locale: string = "en") {
  return getAllProjects(locale).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string, locale: string = "en") {
  const project = projects.find((p) => p.slug === slug);
  return project ? toPublic(project, locale) : undefined;
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

/** Real, derived-from-data counts only , never hand-written metrics. */
export function getPortfolioStats() {
  return {
    totalProjects: projects.length,
    clientDeliveries: projects.filter((p) => p.status === "client-delivery")
      .length,
    categories: new Set(projects.flatMap((p) => p.category)).size,
  };
}

/** The real destination of a locked link. Only the PIN-checking route may call this. */
export function resolveProjectLink(slug: string, key: string): string | undefined {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return undefined;
  if (key === "live") return project.hideLiveUrl ? undefined : project.liveUrl;
  if (key === "secondary") return project.secondaryUrl;
  if (key === "github") return project.githubUrl;
  const sub = key.match(/^sub-(\d+)$/);
  return sub ? project.subProjects?.[Number(sub[1])]?.url : undefined;
}
