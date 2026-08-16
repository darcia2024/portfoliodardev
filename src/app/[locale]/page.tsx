import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import { RichProjectCard } from "@/components/rich-project-card";
import { CompactProjectCard } from "@/components/compact-project-card";
import { CapabilityIcon } from "@/components/capability-icon";
import { Reveal, StaggerReveal } from "@/components/reveal";
import { TechStackSection } from "@/components/tech-stack-section";
import { AinaSpotlight } from "@/components/aina-spotlight";
import { WHATSAPP_URL } from "@/lib/contact";
import {
  getAllProjects,
  getPortfolioStats,
} from "@/data/projects";

const SELECTED_WORK_SLUGS = [
  "umrahme",
  "temantiket",
  "markaz-fiqih",
] as const;

const SHOWCASE_GRID_SLUGS = [
  "nemsyi",
  "kelas-aigypt",
  "talqeeh",
  "aterra",
  "valeoora",
  "gallop-madinah",
  "symp",
  "darcia-wedding-invitation",
  "deenme",
] as const;

const CAPABILITY_KEYS = ["product", "engineering", "ai", "design"] as const;
const PROCESS_KEYS = ["understand", "design", "build", "ship"] as const;
const OFFER_KEYS = ["digitalProduct", "internalSystem", "businessWebsite"] as const;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tProcess = await getTranslations("process");
  const tCapabilities = await getTranslations("capabilities");
  const tStats = await getTranslations("stats");
  const tOffers = await getTranslations("offers");
  const heroFocusItems = t.raw("heroFocusItems") as string[];

  const allProjects = getAllProjects(locale);
  const featured = allProjects
    .filter((p) => SELECTED_WORK_SLUGS.includes(p.slug as (typeof SELECTED_WORK_SLUGS)[number]))
    .sort(
      (a, b) =>
        SELECTED_WORK_SLUGS.indexOf(a.slug as (typeof SELECTED_WORK_SLUGS)[number]) -
        SELECTED_WORK_SLUGS.indexOf(b.slug as (typeof SELECTED_WORK_SLUGS)[number])
    );
  const showcase = allProjects
    .filter((p) => SHOWCASE_GRID_SLUGS.includes(p.slug as (typeof SHOWCASE_GRID_SLUGS)[number]))
    .sort(
      (a, b) =>
        SHOWCASE_GRID_SLUGS.indexOf(a.slug as (typeof SHOWCASE_GRID_SLUGS)[number]) -
        SHOWCASE_GRID_SLUGS.indexOf(b.slug as (typeof SHOWCASE_GRID_SLUGS)[number])
    );
  // Homepage All Work grid order — Aterra, Valeoora and Gallop Madinah lead the
  // grid, followed by the remaining non-featured projects in definition order.
  const GRID_ORDER = [
    "aterra",
    "valeoora",
    "gallop-madinah",
    "igh-tour",
    "dreammecca",
    "itinerary-mesir",
    "rudy-alfarizi",
  ];
  const rest = allProjects
    .filter(
      (p) =>
        !SELECTED_WORK_SLUGS.includes(p.slug as (typeof SELECTED_WORK_SLUGS)[number]) &&
        !SHOWCASE_GRID_SLUGS.includes(p.slug as (typeof SHOWCASE_GRID_SLUGS)[number]) &&
        p.slug !== "aina"
    )
    .sort(
      (a, b) =>
        (GRID_ORDER.indexOf(a.slug) === -1 ? GRID_ORDER.length : GRID_ORDER.indexOf(a.slug)) -
        (GRID_ORDER.indexOf(b.slug) === -1 ? GRID_ORDER.length : GRID_ORDER.indexOf(b.slug))
    );
  const stats = getPortfolioStats();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-1 gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-16">
          <div className="lg:col-span-8 lg:pb-4">
          <Reveal>
            <p className="kicker">{t("eyebrow")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.65rem] leading-[1.1] tracking-tight text-foreground sm:mt-6 sm:text-6xl md:text-[4.5rem]">
              {t("heroTitlePart1")}{" "}
              <span className="italic text-accent">
                {t("heroTitlePart2")}
              </span>{" "}
              {t("heroTitlePart3")}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:text-xl">
              {t("heroSubtitle")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm text-background transition-all hover:bg-accent dark:bg-background dark:text-foreground dark:border dark:border-foreground/30 dark:hover:border-accent"
              >
                {t("getInTouch")}
                <span>→</span>
              </Link>
              <Link
                href="/work"
                className="group inline-flex min-h-11 items-center justify-center text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent sm:justify-start"
              >
                {t("exploreWork")}
              </Link>
            </div>
          </Reveal>
          </div>

          <Reveal delay={0.2} className="border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pb-4 lg:pl-10 lg:pt-0">
            <p className="kicker">{t("heroFocusTitle")}</p>
            <div className="mt-5 divide-y divide-border border-y border-border">
              {heroFocusItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4 py-3.5 sm:py-4">
                  <span className="font-mono text-[10px] tracking-wider text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground sm:text-base">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {t("heroFocusNote")}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-12 sm:py-16 md:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl tracking-tight text-foreground md:text-4xl">
              {tOffers("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-muted md:text-lg">
              {tOffers("subtitle")}
            </p>
          </Reveal>

          <div className="mt-8 divide-y divide-border border-t border-border sm:mt-10">
            {OFFER_KEYS.map((key, i) => (
              <Reveal
                key={key}
                as="article"
                delay={i * 0.08}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 gap-y-4 py-6 sm:grid-cols-1 sm:gap-5 sm:py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10"
              >
                <span className="font-mono text-xs text-muted-2 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl tracking-tight text-foreground sm:text-2xl md:col-span-4 md:text-3xl">
                  {tOffers(`${key}.title`)}
                </h3>
                <div className="col-span-2 space-y-4 sm:col-span-1 md:col-span-7">
                  <p className="max-w-xl leading-relaxed text-muted">
                    {tOffers(`${key}.description`)}
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-foreground">
                    <span className="text-muted-2">{tOffers("resultLabel")}: </span>
                    {tOffers(`${key}.result`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AINA - Featured Spotlight */}
      <AinaSpotlight />

      {/* Selected Work */}
      <section id="work" className="border-t border-border">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-4 pt-12 sm:pt-16 md:pt-24">
              <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                <span className="mr-3 font-mono text-xs not-italic text-muted-2">02</span>
                {t("selectedWork")}
              </h2>
              <Link
                href="/work"
                className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                {t("viewAll")}
              </Link>
            </div>
          </Reveal>

          <StaggerReveal className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 py-4 pb-12 sm:mt-12 sm:gap-y-14 sm:pb-16 sm:grid-cols-2 md:py-16 lg:grid-cols-3" stagger={0.1}>
            {[...featured, ...showcase].map((project, i) => (
              <RichProjectCard key={project.slug} project={project} index={i} />
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-14 sm:py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                <span className="mr-3 font-mono text-xs not-italic text-muted-2">03</span>
                {t("allWorkTitle", { count: rest.length })}
              </h2>
              <Link
                href="/work#archive"
                className="group hidden text-sm text-muted transition-colors hover:text-accent sm:inline"
              >
                {t("fullArchive")}
              </Link>
            </div>
            <p className="mt-3 max-w-lg text-muted">{t("allWorkSubtitle")}</p>
          </Reveal>

          <StaggerReveal className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5" stagger={0.06}>
            {rest.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </StaggerReveal>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/work#archive"
              className="text-sm text-muted hover:text-foreground"
            >
              {t("fullArchive")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              <span className="mr-3 font-mono text-xs not-italic text-muted-2">04</span>
              {t("capabilitiesTitle")}
            </h2>
            <p className="mt-3 max-w-lg text-muted">{t("capabilitiesSubtitle")}</p>
          </Reveal>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {CAPABILITY_KEYS.map((key, i) => (
              <Reveal
                key={key}
                as="div"
                delay={i * 0.08}
                className="grid grid-cols-1 items-start gap-6 py-8 transition-colors hover:bg-surface-2/60 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <div className="flex items-start gap-4 md:col-span-2">
                  <span className="font-mono text-xs text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CapabilityIcon name={key} />
                </div>
                <h3 className="font-display text-2xl tracking-tight text-foreground md:col-span-3 md:text-3xl">
                  {tCapabilities(`${key}.title`)}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted md:col-span-3 md:text-base">
                  {tCapabilities(`${key}.description`)}
                </p>
                <ul className="space-y-1.5 md:col-span-4">
                  {(tCapabilities.raw(`${key}.items`) as string[]).map(
                    (item) => (
                      <li
                        key={item}
                        className="font-mono text-xs uppercase tracking-wider text-muted-2 before:mr-2 before:content-['-']"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & Stack */}
      <TechStackSection />

      {/* How I Build */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              <span className="mr-3 font-mono text-xs not-italic text-muted-2">06</span>
              {t("howIBuild")}
            </h2>
          </Reveal>
          <StaggerReveal className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {PROCESS_KEYS.map((key, i) => (
              <div key={key} className="border-t border-border pt-6">
                <span className="font-display text-3xl italic text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight text-foreground">
                  {tProcess(`${key}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {tProcess(`${key}Body`)}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <StaggerReveal className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0" stagger={0.1}>
            <div className="px-2 py-8 text-center sm:py-12">
              <p className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {stats.totalProjects}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                {tStats("totalProjectsLabel")}
              </p>
            </div>
            <div className="px-2 py-8 text-center sm:py-12">
              <p className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {stats.clientDeliveries}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                {tStats("clientDeliveriesLabel")}
              </p>
            </div>
            <div className="px-2 py-8 text-center sm:py-12">
              <p className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {stats.categories}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                {tStats("categoriesLabel")}
              </p>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* All Work - dense grid so every project is visible without a click */}

      {/* About Preview - pull-quote card */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="kicker">{t("aboutTitle")}</p>
            <div className="mt-6 rounded-[28px] border border-border bg-surface p-10 md:p-16">
              <svg
                viewBox="0 0 32 24"
                aria-hidden
                className="h-8 w-10 text-accent/50"
                fill="currentColor"
              >
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.2C9.6 4.8 7.2 7.6 7.2 11.2c0 .8.2 1.4.4 1.8.6-.4 1.4-.6 2.4-.6 3.2 0 5.6 2.4 5.6 5.6 0 3.2-2.6 6-6 6-2.4 0-4.4-1.2-5.6-3.2Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 3.2c-4.8 1.6-7.2 4.4-7.2 8 0 .8.2 1.4.4 1.8.6-.4 1.4-.6 2.4-.6 3.2 0 5.6 2.4 5.6 5.6 0 3.2-2.6 6-6 6-2.4 0-4.4-1.2-5.6-3.2Z" />
              </svg>
              <p className="mt-6 max-w-3xl text-balance font-display text-3xl leading-[1.25] tracking-tight text-foreground md:text-[2.75rem]">
                {t("aboutHeadline")}
              </p>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted md:text-lg">
                {t("aboutBody")}
              </p>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent"
              >
                {t("readMoreAboutMe")}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact CTA - dark closing band, bleeds into the dark footer */}
      <section className="border-t border-border bg-foreground py-20 text-background dark:bg-surface-2 dark:text-foreground dark:border-border md:py-28">
        <Container>
          <Reveal>
            <h2 className="max-w-3xl text-balance font-display text-4xl leading-[1.1] tracking-tight md:text-6xl">
              {t("contactCtaTitlePart1")}{" "}
              <span className="italic text-accent">
                {t("contactCtaTitlePart2")}
              </span>
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-background dark:bg-accent dark:text-background"
            >
              {t("getInTouch")}
              <span>→</span>
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
