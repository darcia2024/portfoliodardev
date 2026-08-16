import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { MailIcon, WhatsAppIcon } from "@/components/contact-icons";
import { ProjectBriefForm } from "@/components/project-brief-form";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/contact";

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
      label: t("whatsappLabel"),
      value: "+62 813-111-506-025",
      href: WHATSAPP_URL,
      icon: <WhatsAppIcon className="h-5 w-5" />,
    },
    {
      label: t("emailLabel"),
      value: EMAIL_ADDRESS,
      href: `mailto:${EMAIL_ADDRESS}`,
      icon: <MailIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section className="pt-12 pb-20 sm:pt-20 sm:pb-28 md:pt-28">
      <Container>
        <p className="kicker">{t("eyebrow")}</p>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-3xl leading-[1.15] tracking-tight text-foreground sm:mt-6 sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          {t("subtitle")}
        </p>

        <ProjectBriefForm
          title={t("briefTitle")}
          intro={t("briefIntro")}
          projectLabel={t("projectLabel")}
          projectOptions={t.raw("projectOptions") as { value: string; label: string }[]}
          timelineLabel={t("timelineLabel")}
          timelineOptions={t.raw("timelineOptions") as { value: string; label: string }[]}
          budgetLabel={t("budgetLabel")}
          budgetOptions={t.raw("budgetOptions") as { value: string; label: string }[]}
          budgetFallback={t("budgetFallback")}
          needLabel={t("needLabel")}
          needPlaceholder={t("needPlaceholder")}
          submitLabel={t("briefSubmit")}
          message={{
            greeting: t("messageGreeting"),
            project: t("messageProject"),
            timeline: t("messageTimeline"),
            budget: t("messageBudget"),
            need: t("messageNeed"),
          }}
        />

        <div className="mt-12 divide-y divide-border border-t border-border sm:mt-14">
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
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:bg-surface-2/60 sm:gap-6 sm:py-7"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                  {channel.icon}
                </span>
                <span className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl md:text-3xl">
                  {channel.label}
                </span>
              </span>
              <span className="max-w-[10rem] text-right font-mono text-xs text-muted-2 transition-colors group-hover:text-accent sm:text-sm md:max-w-none md:text-base">
                {channel.value} →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
