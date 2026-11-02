import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/container";
import { StatusBadge } from "@/components/status-badge";
import { PreviewPlaceholder } from "@/components/preview-placeholder";
import { CaseStudySection } from "@/components/case-study-section";
import { ProjectCard } from "@/components/project-card";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { PinLink } from "@/components/pin-link";
import Image from "next/image";
import {
  getAllProjects,
  getAllSlugs,
  getProjectBySlug,
} from "@/data/projects";
import type { ProjectStatus } from "@/data/types";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary ?? project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.summary ?? project.shortDescription,
      type: "article",
    },
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

const STATUS_TEXT_KEY: Record<ProjectStatus, string> = {
  production: "statusProduction",
  development: "statusDevelopment",
  "pre-launch": "statusPreLaunch",
  concept: "statusConcept",
  "client-delivery": "statusClientDelivery",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();

  const t = await getTranslations("caseStudy");
  const tCategory = await getTranslations("categories");
  const showLiveUrl = Boolean(project.lockedLinks?.live);

  const related = getAllProjects(locale)
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      project: p,
      overlap: p.category.filter((c) => project.category.includes(c)).length,
    }))
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map((entry) => entry.project);

  const galleryImages = Array.from(
    new Set((project.gallery ?? []).filter((src) => src !== project.cover))
  );
  const outcomes = project.outcomes ?? [
    t(`outcomeStatus.${project.status}`),
    showLiveUrl
      ? t("outcomeLive")
      : t("outcomeScope", { type: project.type }),
    project.role?.length
      ? t("outcomeRole", { role: project.role.join(", ") })
      : t("outcomeDelivery"),
  ];

  return (
    <>
      <section className="pt-12 pb-10 sm:pt-20 sm:pb-14 md:pt-28">
        <Container>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-foreground"
          >
            {t("allWork")}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-8">
            <StatusBadge status={project.status} />
            <span className="text-xs text-muted-2">·</span>
            <span className="text-xs text-muted-2">
              {project.category.map((c) => tCategory(c)).join(" / ")}
            </span>
            {project.year && (
              <>
                <span className="text-xs text-muted-2">·</span>
                <span className="text-xs text-muted-2">{project.year}</span>
              </>
            )}
          </div>

          <h1 className="mt-5 text-balance font-display text-3xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-2 sm:text-sm">
            {project.type}
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
            {project.summary ?? project.shortDescription}
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {project.role && (
              <div className="text-sm text-muted-2">
                <span className="text-muted">{t("role")}</span>
                {project.role.join(", ")}
              </div>
            )}
            {showLiveUrl && (
              <PinLink
                slug={project.slug}
                linkKey="live"
                className="inline-flex min-h-11 items-center text-sm text-foreground underline underline-offset-4"
              >
                {t("visitLiveSite")}
              </PinLink>
            )}
            {project.lockedLinks?.secondary && (
              <PinLink
                slug={project.slug}
                linkKey="secondary"
                className="inline-flex min-h-11 items-center text-sm text-foreground underline underline-offset-4"
              >
                {t("exploreRelatedSite")}
              </PinLink>
            )}
            {project.lockedLinks?.github && (
              <PinLink
                slug={project.slug}
                linkKey="github"
                className="inline-flex min-h-11 items-center text-sm text-foreground underline underline-offset-4"
              >
                GitHub
              </PinLink>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-8 sm:py-10 md:py-14">
        <Container>
          <PreviewPlaceholder
            label={project.title}
            brandColor={project.brandColor}
            cover={project.cover}
          />
        </Container>
      </section>

      {galleryImages.length > 0 && (
        <section className="border-t border-border py-8 sm:py-10 md:py-14">
          <Container>
            <LightboxGallery images={galleryImages} title={project.title} />
          </Container>
        </section>
      )}

      {project.notes && (
        <Container>
          <p className="border-l-2 border-border py-1 pl-4 text-sm italic text-muted-2">
            {project.notes}
          </p>
        </Container>
      )}

      {project.problem && (
        <CaseStudySection eyebrow={t("problem")}>
          <p>{project.problem}</p>
        </CaseStudySection>
      )}

      {project.productThinking && (
        <CaseStudySection eyebrow={t("productThinking")}>
          <p>{project.productThinking}</p>
        </CaseStudySection>
      )}

      {project.solution && (
        <CaseStudySection eyebrow={t("solution")}>
          <p>{project.solution}</p>
        </CaseStudySection>
      )}

      {project.designDirection && (
        <CaseStudySection eyebrow={t("designDirection")}>
          <p>{project.designDirection}</p>
        </CaseStudySection>
      )}

      {project.technicalBuild && (
        <CaseStudySection eyebrow={t("technicalBuild")}>
          <p className="font-mono text-sm leading-relaxed text-muted md:text-base">
            {project.technicalBuild}
          </p>
        </CaseStudySection>
      )}

      {project.challenges && (
        <CaseStudySection eyebrow={t("challenges")}>
          <p>{project.challenges}</p>
        </CaseStudySection>
      )}

      <section className="border-t border-border py-12 sm:py-14 md:py-20">
        <Container className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="kicker">{t("outcomesLabel")}</p>
            <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
              {t("outcomesTitle")}
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3 py-5 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4 md:py-6"
                >
                  <span className="font-mono text-xs tracking-wider text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySection eyebrow={t("currentState")}>
        <p>
          {t("currentStateIntro")}{" "}
          <span className="text-foreground">
            {t(STATUS_TEXT_KEY[project.status])}
          </span>
        </p>
      </CaseStudySection>

      {project.lessons && (
        <CaseStudySection eyebrow={t("reflection")}>
          <p>{project.lessons}</p>
        </CaseStudySection>
      )}

      {project.subProjects && project.subProjects.length > 0 && (
        <section className="border-t border-border py-12 sm:py-16 md:py-24">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("ecosystemTitle", { title: project.title })}
            </h2>
            <div className="mt-7 grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
              {project.subProjects.map((sub, i) => (
                <div key={sub.title}>
                  <h3 className="font-display text-lg tracking-tight text-foreground">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{sub.description}</p>
                  {sub.hasLink && (
                    <PinLink
                      slug={project.slug}
                      linkKey={`sub-${i}`}
                      className="mt-3 inline-block text-sm text-foreground underline underline-offset-4"
                    >
                      {t("visitLiveSite")}
                    </PinLink>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.lockedLinks?.secondary && (
        <section className="border-t border-border py-12 sm:py-16 md:py-24">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("relatedSiteTitle")}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-8 lg:grid-cols-2">
              {["/markaz-feature-3.png", "/markaz-feature-4.png"].map((src, i) => (
                <div
                  key={src}
                  className="lift group relative w-full overflow-hidden rounded-[28px] border border-border"
                >
                  <Image
                    src={src}
                    alt={project.title + " related site screenshot " + (i + 1)}
                    width={2048}
                    height={1168}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-pretty text-base text-muted md:text-lg">
              {t("relatedSiteNote")}
            </p>
            <PinLink
              slug={project.slug}
              linkKey="secondary"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t("exploreRelatedSite")}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </PinLink>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-border py-12 sm:py-16 md:py-24">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("relatedWork")}
            </h2>
            <div className="mt-8">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
