import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ArchiveExplorer } from "@/components/archive-explorer";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The full, searchable archive of every project Daru has built — AI products, travel technology, education platforms, client systems, and brand work.",
};

export default function ArchivePage() {
  const all = getAllProjects();

  return (
    <section className="pt-20 pb-24 md:pt-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          Archive
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
          Every project, in one place.
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          A living record — websites, applications, AI products, client
          systems, and branding work, added to continuously.
        </p>

        <div className="mt-12">
          <ArchiveExplorer projects={all} />
        </div>
      </Container>
    </section>
  );
}
