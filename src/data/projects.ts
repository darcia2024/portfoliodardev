import type { Project, ProjectTranslations } from "./types";
import translationsId from "./translations.id.json";

const idTranslations = translationsId as ProjectTranslations;

export const projects: Project[] = [
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
    gallery: ["/aigypt-laptop.png"],
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
];

/** Merges in the Indonesian translation overlay when locale is "id"; falls back to English for any untranslated field. */
function localize(project: Project, locale: string): Project {
  if (locale !== "id") return project;
  const overlay = idTranslations[project.slug];
  return overlay ? { ...project, ...overlay } : project;
}

export function getAllProjects(locale: string = "en") {
  return projects.map((p) => localize(p, locale));
}

export function getFeaturedProjects(locale: string = "en") {
  return getAllProjects(locale).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string, locale: string = "en") {
  const project = projects.find((p) => p.slug === slug);
  return project ? localize(project, locale) : undefined;
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
