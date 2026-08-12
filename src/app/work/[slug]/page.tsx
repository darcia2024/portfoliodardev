import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getAllProjects()
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
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <StatusBadge status={project.status} />
            <span className="text-xs text-muted-2">·</span>
            <span className="text-xs text-muted-2">
              {project.category.join(" / ")}
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
                <span className="text-muted">Role — </span>
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
                Visit live site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground underline underline-offset-4"
              >
                View repository ↗
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
        <CaseStudySection eyebrow="Problem">
          <p>{project.problem}</p>
        </CaseStudySection>
      )}

      {project.productThinking && (
        <CaseStudySection eyebrow="Product Thinking">
          <p>{project.productThinking}</p>
        </CaseStudySection>
      )}

      {project.solution && (
        <CaseStudySection eyebrow="Solution">
          <p>{project.solution}</p>
        </CaseStudySection>
      )}

      {project.designDirection && (
        <CaseStudySection eyebrow="Visual / Brand Direction">
          <p>{project.designDirection}</p>
        </CaseStudySection>
      )}

      {project.technicalBuild && (
        <CaseStudySection eyebrow="Technical Build">
          <p className="font-mono text-sm leading-relaxed text-muted md:text-base">
            {project.technicalBuild}
          </p>
        </CaseStudySection>
      )}

      {project.challenges && (
        <CaseStudySection eyebrow="Challenges">
          <p>{project.challenges}</p>
        </CaseStudySection>
      )}

      <CaseStudySection eyebrow="Current State">
        <p>
          This project is currently at{" "}
          <span className="text-foreground">
            {project.status === "production" && "production, live and in use."}
            {project.status === "development" && "active development."}
            {project.status === "pre-launch" && "pre-launch — built, not yet publicly live."}
            {project.status === "concept" && "concept stage — planned, not yet built."}
            {project.status === "client-delivery" &&
              "client delivery — built and delivered to the client."}
          </span>
        </p>
      </CaseStudySection>

      {project.lessons && (
        <CaseStudySection eyebrow="Reflection">
          <p>{project.lessons}</p>
        </CaseStudySection>
      )}

      {related.length > 0 && (
        <section className="border-t border-border py-16 md:py-24">
          <Container>
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              Related Work
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
