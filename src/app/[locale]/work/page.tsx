import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { ArchiveExplorer } from "@/components/archive-explorer";
import { getAllProjects } from "@/data/projects";

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

  const all = getAllProjects(locale);

  return (
    <>
      <section className="pt-12 pb-8 sm:pt-20 sm:pb-10 md:pt-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
        </Container>
      </section>

      <section id="archive" className="border-t border-border py-12 sm:py-20 md:py-28">
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
