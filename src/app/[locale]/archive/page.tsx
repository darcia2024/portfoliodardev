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
  const t = await getTranslations({ locale, namespace: "archivePage" });
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("archivePage");
  const all = getAllProjects(locale);

  return (
    <section className="pt-20 pb-24 md:pt-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 max-w-xl text-muted">{t("subtitle")}</p>

        <div className="mt-12">
          <ArchiveExplorer projects={all} />
        </div>
      </Container>
    </section>
  );
}
