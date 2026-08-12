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
    <section className="border-t border-border py-14 md:py-20">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            {eyebrow}
          </p>
          {title && (
            <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground">
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
