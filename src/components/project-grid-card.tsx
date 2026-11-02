import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";

/** Landing-page card: every project gets the same 16:9 thumbnail and the same fixed text rows. */
export function ProjectGridCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border bg-surface-2">
        {project.cover && (
          <Image
            src={project.cover}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="truncate font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
          {project.type}
        </p>
        <h3 className="mt-2 truncate font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-[2lh] text-pretty text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <StatusBadge status={project.status} className="shrink-0 text-[10px]" />
          <span className="text-sm text-muted-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
