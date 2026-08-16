import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";

export function CompactProjectCard({ project }: { project: Project }) {
  const tCategory = useTranslations("categories");
  const hasCover = Boolean(project.cover);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2 sm:rounded-[24px]"
    >
      <div
        className="relative flex aspect-[16/11] items-center justify-center overflow-hidden border-b border-border bg-surface-2"
        style={
          project.brandColor && !hasCover
            ? {
                background: `linear-gradient(145deg, ${project.brandColor}20, var(--surface-2) 56%, ${project.brandColor}0f)`,
              }
            : undefined
        }
      >
        {hasCover ? (
          <>
            <Image
              src={project.cover!}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent opacity-80" />
          </>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center p-5">
            <span className="absolute left-5 top-5 h-3 w-3 border-l border-t border-accent/60" />
            <span className="absolute right-5 top-5 h-3 w-3 border-r border-t border-accent/60" />
            <span className="absolute bottom-5 left-5 h-3 w-3 border-b border-l border-accent/60" />
            <span className="absolute bottom-5 right-5 h-3 w-3 border-b border-r border-accent/60" />
            <span
              className="absolute inset-x-8 bottom-7 h-px opacity-60"
              style={{ backgroundColor: project.brandColor ?? "var(--accent)" }}
            />
            <span className="max-w-[11rem] text-center font-display text-lg italic leading-tight text-foreground/35 transition-colors group-hover:text-foreground/60">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-2 sm:text-[10px] sm:tracking-[0.22em]">
            {project.year ?? "Project"}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2 sm:inline">
            {tCategory(project.category[0])}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-medium leading-snug text-foreground transition-colors group-hover:text-accent sm:text-base">
            {project.title}
          </h3>
          <span className="mt-1 shrink-0 text-sm text-muted-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">
          {project.shortDescription}
        </p>

        <div className="mt-auto flex min-w-0 items-center gap-2 pt-3 sm:pt-5">
          <StatusBadge status={project.status} className="shrink-0 text-[10px]" />
        </div>
      </div>
    </Link>
  );
}
