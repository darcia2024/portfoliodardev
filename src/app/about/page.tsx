import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CAPABILITY_PILLARS } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daru is a digital product builder working across product strategy, full-stack development, AI, and brand design — mostly on problems from Masisir life, travel, education, and client operations.",
};

const FOCUS_AREAS = [
  "Masisir & student life in Egypt",
  "Travel & Umrah technology",
  "Islamic education platforms",
  "Client operations & internal systems",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            About
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
            I like turning messy problems into usable systems.
          </h1>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
              Positioning
            </p>
          </div>
          <div className="max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>
              I&rsquo;m Daru — a digital product builder, not just a web
              developer. My work sits at the intersection of product
              strategy, full-stack development, AI, UI/UX, and brand design.
              Most projects I take on need more than one of those
              disciplines to actually work, so I don&rsquo;t separate them
              too strictly. I use whichever one is necessary to turn a
              problem into something usable.
            </p>
            <p>
              A lot of what I&rsquo;ve built comes from friction I ran into
              firsthand, or friction people around me kept running into:
            </p>
            <ul className="space-y-2">
              {FOCUS_AREAS.map((area) => (
                <li key={area} className="text-foreground/90">
                  — {area}
                </li>
              ))}
            </ul>
            <p>
              That&rsquo;s why the work in this portfolio ranges from an AI
              assistant for Indonesian students in Egypt, to a payment-
              integrated fiqh course platform, to an internal operations
              system for a travel agency, to brand identities for bakeries
              and laundry services. Different domains, same approach: find
              the real problem, decide what discipline it actually needs,
              and build it end to end.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
              How I work
            </p>
          </div>
          <div className="max-w-2xl space-y-5 text-pretty text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>
              Most projects here were handled end to end — from the
              original problem and product thinking, through visual
              identity, to the shipped, deployed product. That includes
              client work, where the brief comes from someone else&rsquo;s
              operation, and personal/community projects, where the brief
              starts with something I ran into myself.
            </p>
            <p>
              I&rsquo;m explicit on this portfolio about what stage each
              project is actually at — production, in development,
              pre-launch, concept, or delivered to a client — because I
              think a portfolio should be honest about what&rsquo;s real
              and what&rsquo;s still in progress.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            Capabilities
          </p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-background p-7">
                <h3 className="font-display text-xl tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-2 before:mr-2 before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <p className="max-w-xl text-balance font-display text-2xl tracking-tight text-foreground md:text-3xl">
            Open to product, engineering, AI, and brand work.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
