import type { Metadata } from "next";
import { Container } from "@/components/container";
import { FeaturedProjectRow } from "@/components/featured-project-row";
import { ArchiveExplorer } from "@/components/archive-explorer";
import { getAllProjects, getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Featured case studies and the full archive of digital products, brand systems, and client work built by Daru.",
};

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

export default function WorkPage() {
  const featured = getFeaturedProjects().sort(
    (a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)
  );
  const all = getAllProjects();

  return (
    <>
      <section className="pt-20 pb-10 md:pt-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
            Work
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
            Featured case studies, and everything else in the archive.
          </h1>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container>
          {featured.map((project, i) => (
            <FeaturedProjectRow key={project.slug} project={project} index={i} />
          ))}
        </Container>
      </section>

      <section id="archive" className="border-t border-border py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            Complete Archive
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Every known project — filter by category or search by name.
          </p>
          <div className="mt-10">
            <ArchiveExplorer projects={all} />
          </div>
        </Container>
      </section>
    </>
  );
}
