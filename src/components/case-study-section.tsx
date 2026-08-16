import { Container } from "./container";

export function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 sm:py-14 md:py-20">
      <Container className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="kicker">{eyebrow}</p>
          {title && (
            <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>
          )}
        </div>
        <div className="md:col-span-8">
          <div className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
