import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import { FeaturedProjectRow } from "@/components/featured-project-row";
import { RichProjectCard } from "@/components/rich-project-card";
import { CompactProjectCard } from "@/components/compact-project-card";
import { SquiggleText } from "@/components/squiggle-text";
import { CapabilityIcon } from "@/components/capability-icon";
import { PreviewPlaceholder } from "@/components/preview-placeholder";
import {
  getAllProjects,
  getFeaturedProjects,
  getPortfolioStats,
} from "@/data/projects";

const FEATURED_ORDER = [
  "aina",
  "umrahme",
  "temantiket",
  "nemsyi",
  "markaz-fiqih",
  "kelas-aigypt",
  "talqeeh",
  "el-massa-travel-management-system",
  "symp",
  "darcia-wedding-invitation",
  "qohiroh-digital-ecosystem",
];

const CAPABILITY_KEYS = ["product", "engineering", "ai", "design"] as const;
const PROCESS_KEYS = ["understand", "design", "build", "ship"] as const;

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

  const featured = getFeaturedProjects(locale).sort(
    (a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)
  );
  const rest = getAllProjects(locale).filter((p) => !p.featured);
  const stats = getPortfolioStats();

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-muted md:text-xl">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/work"
              className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
            >
              {t("exploreWork")}
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground underline underline-offset-4"
            >
              {t("aboutMe")}
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 sm:mt-20 sm:gap-6 md:mt-24">
            {featured.slice(0, 3).map((project, i) => (
              <div key={project.slug} className={i === 1 ? "sm:-mt-8" : ""}>
                <PreviewPlaceholder
                  label={project.title}
                  brandColor={project.brandColor}
                  compact
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-border">
        <Container>
          <div className="flex items-end justify-between pt-16 md:pt-24">
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("selectedWork")}
            </h2>
            <Link
              href="/work"
              className="text-sm text-muted hover:text-foreground"
            >
              {t("viewAll")}
            </Link>
          </div>

          <div>
            {featured.slice(0, 2).map((project, i) => (
              <FeaturedProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 border-t border-border py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3">
            {featured.slice(2).map((project, i) => (
              <RichProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            <SquiggleText>{t("capabilitiesTitle")}</SquiggleText>
          </h2>
          <p className="mt-3 max-w-lg text-muted">{t("capabilitiesSubtitle")}</p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-[28px] border border-border bg-surface p-7"
              >
                <CapabilityIcon name={key} />
                <h3 className="mt-5 font-display text-xl tracking-tight text-foreground">
                  {tCapabilities(`${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {tCapabilities(`${key}.description`)}
                </p>
                <ul className="mt-5 space-y-2">
                  {(tCapabilities.raw(`${key}.items`) as string[]).map(
                    (item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-2 before:mr-2 before:content-['•']"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How I Build */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            {t("howIBuild")}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_KEYS.map((key, i) => (
              <div key={key}>
                <span className="font-mono text-xs text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl tracking-tight text-foreground">
                  {tProcess(`${key}Title`)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {tProcess(`${key}Body`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 rounded-[28px] border border-border bg-surface p-10 sm:grid-cols-3 md:p-14">
            <div className="text-center">
              <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                {stats.totalProjects}
              </p>
              <p className="mt-2 text-sm text-muted">
                {tStats("totalProjectsLabel")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                {stats.clientDeliveries}
              </p>
              <p className="mt-2 text-sm text-muted">
                {tStats("clientDeliveriesLabel")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                {stats.categories}
              </p>
              <p className="mt-2 text-sm text-muted">
                {tStats("categoriesLabel")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* All Work — dense grid so every project is visible without a click */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("allWorkTitle", { count: stats.totalProjects })}
            </h2>
            <Link
              href="/archive"
              className="hidden text-sm text-muted hover:text-foreground sm:inline"
            >
              {t("fullArchive")}
            </Link>
          </div>
          <p className="mt-3 max-w-lg text-muted">{t("allWorkSubtitle")}</p>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
            {rest.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/archive"
              className="text-sm text-muted hover:text-foreground"
            >
              {t("fullArchive")}
            </Link>
          </div>
        </Container>
      </section>

      {/* About Preview — pull-quote card */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("aboutTitle")}
          </p>
          <div className="mt-6 rounded-[32px] bg-surface-2 p-10 md:p-16">
            <svg
              viewBox="0 0 32 24"
              aria-hidden
              className="h-8 w-10 text-foreground/20"
              fill="currentColor"
            >
              <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.2C9.6 4.8 7.2 7.6 7.2 11.2c0 .8.2 1.4.4 1.8.6-.4 1.4-.6 2.4-.6 3.2 0 5.6 2.4 5.6 5.6 0 3.2-2.6 6-6 6-2.4 0-4.4-1.2-5.6-3.2Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 3.2c-4.8 1.6-7.2 4.4-7.2 8 0 .8.2 1.4.4 1.8.6-.4 1.4-.6 2.4-.6 3.2 0 5.6 2.4 5.6 5.6 0 3.2-2.6 6-6 6-2.4 0-4.4-1.2-5.6-3.2Z" />
            </svg>
            <p className="mt-4 max-w-3xl text-balance font-display text-2xl tracking-tight text-foreground md:text-4xl">
              {t("aboutHeadline")}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-muted md:text-lg">
              {t("aboutBody")}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm text-foreground underline underline-offset-4"
            >
              {t("readMoreAboutMe")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA — dark closing band, bleeds into the dark footer */}
      <section className="border-t border-border bg-foreground py-20 text-background md:py-28">
        <Container>
          <h2 className="max-w-2xl text-balance font-display text-3xl tracking-tight md:text-4xl">
            <SquiggleText squiggleClassName="text-background/40">
              {t("contactCtaTitle")}
            </SquiggleText>
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm text-foreground transition-opacity hover:opacity-85"
          >
            {t("getInTouch")}
          </Link>
        </Container>
      </section>
    </>
  );
}
