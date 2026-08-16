"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal, StaggerReveal } from "@/components/reveal";

/**
 * AINA Featured Spotlight — a full-width editorial showcase for the
 * signature AINA project, placed right after the hero on the home page.
 * Uses the editorial cover mockup in public/aina-cover-v2.png.
 */
export function AinaSpotlight() {
  const t = useTranslations("featuredRow");
  const tags = t.raw("ainaTags") as string[];

  return (
    <section className="border-t border-border bg-foreground text-background dark:bg-surface-2 dark:text-foreground dark:border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 md:py-28">
        {/* Section header */}
        <Reveal>
          <p className="kicker dark:text-accent/80">01 - {t("ainaEyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl md:mt-6 md:text-6xl">
            {t("ainaTitlePart1")}{" "}
            <span className="italic text-accent">{t("ainaTitlePart2")}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70 md:text-lg dark:text-foreground/70">
            {t("ainaSummary")}
          </p>
        </Reveal>

        {/* Large mockup */}
        <Reveal delay={0.12} className="mt-8 md:mt-12">
          <Link
            href="/work/aina"
            aria-label={t("openAinaCaseStudy")}
            className="group block overflow-hidden rounded-2xl border border-background/10 shadow-2xl shadow-accent/5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent sm:rounded-[28px] dark:border-foreground/10"
          >
            <Image
              src="/aina-cover-v2.png"
              alt={t("ainaImageAlt")}
              width={2560}
              height={1440}
              priority={false}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </Reveal>

        {/* Meta row */}
        <StaggerReveal className="mt-8 flex flex-col items-stretch justify-between gap-6 border-t border-background/10 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:pt-8 dark:border-foreground/10" stagger={0.08}>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-background/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-background/80 sm:px-4 sm:text-[11px] dark:border-foreground/20 dark:text-foreground/70"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="https://ainalabs.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-background underline underline-offset-4 transition-colors hover:text-accent dark:text-foreground"
            >
              ainalabs.pro
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/work/aina"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-background dark:bg-foreground dark:text-background dark:hover:bg-accent"
            >
              {t("readCaseStudy")}
              <span>→</span>
            </Link>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
