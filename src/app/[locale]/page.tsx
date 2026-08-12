import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import { FeaturedProjectRow } from "@/components/featured-project-row";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects, getFeaturedProjects } from "@/data/projects";

const FEATURED_ORDER = [
  "aina",
  "umrahme",
  "talqeeh",
  "nemsyi",
  "markaz-fiqih",
  "kelas-aigypt",
  "qohiroh-digital-ecosystem",
  "el-massa-brand-merchandise",
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

  const featured = getFeaturedProjects(locale).sort(
    (a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)
  );
  const more = getAllProjects(locale)
    .filter((p) => !p.featured)
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
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
            {featured.map((project, i) => (
              <FeaturedProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            {t("capabilitiesTitle")}
          </h2>
          <p className="mt-3 max-w-lg text-muted">{t("capabilitiesSubtitle")}</p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_KEYS.map((key) => (
              <div key={key} className="bg-background p-7">
                <h3 className="font-display text-xl tracking-tight text-foreground">
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
                        className="text-sm text-muted-2 before:mr-2 before:content-['—']"
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

      {/* More Projects */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("moreProjects")}
            </h2>
            <Link
              href="/archive"
              className="text-sm text-muted hover:text-foreground"
            >
              {t("fullArchive")}
            </Link>
          </div>
          <div className="mt-8">
            {more.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2 className="font-display text-2xl tracking-tight text-foreground md:col-span-4 md:text-3xl">
            {t("aboutTitle")}
          </h2>
          <div className="md:col-span-8">
            <p className="text-balance font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("aboutHeadline")}
            </p>
            <p className="mt-5 max-w-2xl text-muted">{t("aboutBody")}</p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
            >
              {t("readMoreAboutMe")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="max-w-2xl text-balance font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {t("contactCtaTitle")}
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            {t("getInTouch")}
          </Link>
        </Container>
      </section>
    </>
  );
}
