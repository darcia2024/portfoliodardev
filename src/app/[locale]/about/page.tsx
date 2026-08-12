import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";

const CAPABILITY_KEYS = ["product", "engineering", "ai", "design"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: t("eyebrow"),
    description: t("positioningP1"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");
  const tCapabilities = await getTranslations("capabilities");
  const focusAreas = t.raw("focusAreas") as string[];

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("headline")}
          </h1>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
              {t("positioningLabel")}
            </p>
          </div>
          <div className="max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>{t("positioningP1")}</p>
            <p>{t("positioningP2")}</p>
            <ul className="space-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="text-foreground/90">
                  — {area}
                </li>
              ))}
            </ul>
            <p>{t("positioningP3")}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
              {t("howIWorkLabel")}
            </p>
          </div>
          <div className="max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>{t("howIWorkP1")}</p>
            <p>{t("howIWorkP2")}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {t("capabilitiesLabel")}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-[28px] border border-border bg-surface p-7"
              >
                <h3 className="font-display text-xl tracking-tight text-foreground">
                  {tCapabilities(`${key}.title`)}
                </h3>
                <ul className="mt-4 space-y-2">
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

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <p className="max-w-xl text-balance font-display text-2xl tracking-tight text-foreground md:text-3xl">
            {t("ctaText")}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            {t("ctaButton")}
          </Link>
        </Container>
      </section>
    </>
  );
}
