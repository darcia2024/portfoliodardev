import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  const CHANNELS = [
    {
      label: t("emailLabel"),
      value: "darciamuliathiifa@gmail.com",
      href: "mailto:darciamuliathiifa@gmail.com",
    },
    {
      label: t("githubLabel"),
      value: "github.com/darufahma-rgb",
      href: "https://github.com/darufahma-rgb",
    },
  ];

  return (
    <section className="pt-20 pb-28 md:pt-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          {t("eyebrow")}
        </p>
        <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
          {t("subtitle")}
        </p>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between py-6"
            >
              <span className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                {channel.label}
              </span>
              <span className="text-sm text-muted transition-colors group-hover:text-foreground md:text-base">
                {channel.value} →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
