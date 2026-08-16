import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { WHATSAPP_URL } from "@/lib/contact";

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
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="kicker">{t("eyebrow")}</p>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-3xl leading-[1.15] tracking-tight text-foreground sm:mt-6 sm:text-5xl md:text-6xl">
            {t("headline")}
          </h1>
        </Container>
      </section>

      <section className="border-t border-border py-12 sm:py-16 md:py-20">
        <Container>
          <p className="kicker">{t("positioningLabel")}</p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface sm:min-h-[520px] sm:rounded-[24px] lg:h-full lg:aspect-auto">
              <Image
                src="/dar-dev.png"
                alt="Daru, digital product builder"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                priority
                className="object-cover object-[56%_18%]"
              />
            </div>

            <div className="flex flex-col">
              <div className="max-w-5xl">
                <p className="text-pretty text-base leading-[1.8] text-muted md:text-lg">
                  <strong className="font-semibold text-muted">
                    {t("positioningP1Lead")}
                  </strong>{" "}
                  {t("positioningP1Rest")}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 border-y border-border py-6 lg:grid-cols-[minmax(0,1fr)_260px]">
                  <p className="text-pretty text-base leading-[1.8] text-muted md:text-lg">
                    {t("positioningP2")}
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {focusAreas.map((area) => (
                      <li
                        key={area}
                        className="border-l border-accent/60 bg-surface/40 px-4 py-2.5 text-sm leading-relaxed text-foreground/90"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 max-w-5xl text-pretty text-base leading-[1.8] text-muted md:mt-10 md:text-lg">
                {t("positioningP3")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="kicker">{t("howIWorkLabel")}</p>
          </div>
          <div className="max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>{t("howIWorkP1")}</p>
            <p>{t("howIWorkP2")}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <p className="kicker">{t("capabilitiesLabel")}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-[24px] border border-border bg-surface p-7 transition-colors hover:border-accent/50"
              >
                <h3 className="font-display text-2xl tracking-tight text-foreground">
                  {tCapabilities(`${key}.title`)}
                </h3>
                <ul className="mt-4 space-y-2">
                  {(tCapabilities.raw(`${key}.items`) as string[]).map(
                    (item) => (
                      <li
                        key={item}
                        className="font-mono text-xs uppercase tracking-wider text-muted-2 before:mr-2 before:content-['—']"
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
          <p className="max-w-xl text-balance font-display text-3xl leading-snug tracking-tight text-foreground md:text-4xl">
            {t("ctaText")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm text-background transition-colors hover:bg-accent dark:bg-background dark:text-foreground dark:border dark:border-foreground/30 dark:hover:border-accent"
          >
            {t("ctaButton")}
            <span>→</span>
          </a>
        </Container>
      </section>
    </>
  );
}
