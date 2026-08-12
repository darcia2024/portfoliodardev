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

  return (
    <>
      <section className="pt-20 pb-14 md:pt-28">
        <Container>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-foreground"
          >
            {t("allWork")}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
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

          <h1 className="mt-5 text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wide text-muted-2">
            {project.type}
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted">
            {project.summary ?? project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {project.role && (
              <div className="text-sm text-muted-2">
                <span className="text-muted">{t("role")}</span>
                {project.role.join(", ")}
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground underline underline-offset-4"
              >
                {t("visitLiveSite")}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground underline underline-offset-4"
              >
                {t("viewRepository")}
              </a>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10 md:py-14">
        <Container>
          <PreviewPlaceholder
            label={project.title}
            brandColor={project.brandColor}
          />
        </Container>
      </section>

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
        <section className="border-t border-border py-16 md:py-24">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              {t("ecosystemTitle", { title: project.title })}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {project.subProjects.map((sub) => (
                <div key={sub.title}>
                  <h3 className="font-display text-lg tracking-tight text-foreground">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{sub.description}</p>
                  {sub.url && (
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-foreground underline underline-offset-4"
                    >
                      {t("visitLiveSite")}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-border py-16 md:py-24">
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
