import Link from "next/link";
import { Container } from "@/components/container";
import { FeaturedProjectRow } from "@/components/featured-project-row";
import { ProjectCard } from "@/components/project-card";
import { CAPABILITY_PILLARS } from "@/data/capabilities";
import { getAllProjects, getFeaturedProjects } from "@/data/projects";

const FEATURED_ORDER = [
  "aina",
  "umrahme",
  "el-massa-travel-management-system",
  "nemsyi",
  "markaz-fiqih",
  "kelas-aigypt",
  "qohiroh-digital-ecosystem",
  "el-massa-brand-merchandise",
];

const PROCESS = [
  {
    step: "01",
    title: "Understand",
    description:
      "Sit inside the actual problem — a community, an operation, a client's workflow — before deciding what to build.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Shape the product and its visual system together: user flow, architecture, brand, and interface as one decision.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Full-stack development, AI where it earns its place, deployed and usable — not a prototype that stops at Figma.",
  },
  {
    step: "04",
    title: "Ship & Iterate",
    description:
      "Put it in front of the people it's for, and keep shaping it against what actually happens once it's live.",
  },
];

export default function Home() {
  const featured = getFeaturedProjects().sort(
    (a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)
  );
  const more = getAllProjects()
    .filter((p) => !p.featured)
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            Digital Product Builder · Indonesia / Cairo
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl">
            I build digital products from idea to launch.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-muted md:text-xl">
            Product strategy, AI, full-stack development, and brand systems —
            brought together to solve real operational and community
            problems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/work"
              className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
            >
              Explore Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground underline underline-offset-4"
            >
              About Me
            </Link>
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-border">
        <Container>
          <div className="flex items-end justify-between pt-16 md:pt-24">
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              Selected Work
            </h2>
            <Link
              href="/work"
              className="text-sm text-muted hover:text-foreground"
            >
              View all →
            </Link>
          </div>

          <div>
            {featured.map((project, i) => (
              <FeaturedProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            Capabilities
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Four pillars that show up together on almost every project, not
            separately.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-background p-7">
                <h3 className="font-display text-xl tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{pillar.description}</p>
                <ul className="mt-5 space-y-2">
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

      {/* How I Build */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            How I Build
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step}>
                <span className="font-mono text-xs text-muted-2">{p.step}</span>
                <h3 className="mt-3 font-display text-xl tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* More Projects */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              More Projects
            </h2>
            <Link
              href="/archive"
              className="text-sm text-muted hover:text-foreground"
            >
              Full archive →
            </Link>
          </div>
          <div className="mt-8">
            {more.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2 className="font-display text-2xl tracking-tight text-foreground md:col-span-4 md:text-3xl">
            About
          </h2>
          <div className="md:col-span-8">
            <p className="text-balance font-display text-2xl tracking-tight text-foreground md:text-3xl">
              I like turning messy problems into usable systems.
            </p>
            <p className="mt-5 max-w-2xl text-muted">
              Most of my projects start from a real friction point —
              something a student, a community, or a client actually ran
              into — around Masisir life, travel, education, or operations. I
              don&rsquo;t separate product, design, and engineering too
              strictly. I use whichever discipline is necessary to turn a
              problem into something usable.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
            >
              Read more about me →
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="max-w-2xl text-balance font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Have a problem worth turning into a product?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
