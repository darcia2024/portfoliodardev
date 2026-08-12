import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { FeaturedProjectRow } from "@/components/featured-project-row";
import { ArchiveExplorer } from "@/components/archive-explorer";
import { getAllProjects, getFeaturedProjects } from "@/data/projects";

const FEATURED_ORDER = [
  "aina",
  "umrahme",
  "el-massa-travel-management-system",
  "nemsyi",
  "markaz-fiqih",
  "kelas-aigypt",
  "qohiroh-digital-ecosystem",
  "el-massa-brand-merchandise",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "workPage" });
  return {
    title: t("eyebrow"),
    description: t("archiveSubtitle"),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("workPage");

  const featured = getFeaturedProjects(locale).sort(
    (a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)
  );
  const all = getAllProjects(locale);

  return (
    <>
      <section className="pt-20 pb-10 md:pt-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
            {t("title")}
          </h1>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container>
          {featured.map((project, i) => (
            <FeaturedProjectRow key={project.slug} project={project} index={i} />
          ))}
        </Container>
      </section>

      <section id="archive" className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            {t("archiveTitle")}
          </h2>
          <p className="mt-3 max-w-lg text-muted">{t("archiveSubtitle")}</p>
          <div className="mt-10">
            <ArchiveExplorer projects={all} />
          </div>
        </Container>
      </section>
    </>
  );
}
