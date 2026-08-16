import { useTranslations } from "next-intl";
import {
  STACK_CATEGORIES,
  STACK_ITEMS,
  type StackCategory,
} from "@/data/stack";
import { Reveal, StaggerReveal } from "./reveal";
import { Container } from "./container";

/** Minimal geometric mark per category, drawn with the accent line motif. */
function CategoryMark({ category }: { category: StackCategory }) {
  const paths: Record<StackCategory, React.ReactNode> = {
    frontend: (
      <>
        <path d="M3 8L10 15L17 5" />
      </>
    ),
    fullstack: (
      <>
        <rect x="4" y="4" width="12" height="12" rx="2" />
        <path d="M4 10H16" />
      </>
    ),
    ai: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="M10 7V13M7 10H13" />
      </>
    ),
    tools: (
      <>
        <path d="M6 3L10 3L13 6L13 10L17 14L14 17L10 13L6 13L3 10L6 7Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-5 w-5 text-accent"
    >
      {paths[category]}
    </svg>
  );
}

export function TechStackSection() {
  const t = useTranslations("stack");

  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            <span className="mr-3 font-mono text-xs not-italic text-muted-2">05</span>
            {t("title")}
          </h2>
          <p className="mt-3 max-w-lg text-muted">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STACK_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <CategoryMark category={cat.key} />
                  <h3 className="font-display text-xl tracking-tight text-foreground">
                    {t(cat.labelKey)}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-2">{t(cat.introKey)}</p>
                <StaggerReveal className="mt-5 flex flex-wrap gap-2">
                  {STACK_ITEMS.filter((item) => item.category === cat.key).map(
                    (item) => (
                      <span
                        key={item.slug}
                        className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        {t(`items.${item.nameKey}`)}
                      </span>
                    )
                  )}
                </StaggerReveal>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
