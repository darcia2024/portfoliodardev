import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";

export function CompactProjectCard({ project }: { project: Project }) {
  const tCategory = useTranslations("categories");

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-2"
        style={
          project.brandColor
            ? {
                background: `linear-gradient(155deg, ${project.brandColor}1a, var(--surface-2))`,
              }
            : undefined
        }
      >
        <span
          className="absolute inset-0 flex items-center justify-center p-4 text-center font-display text-sm leading-tight text-foreground/30 transition-colors group-hover:text-foreground/45"
          aria-hidden
        >
          {project.title}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-medium text-foreground transition-colors group-hover:text-muted">
        {project.title}
      </h3>
      <div className="mt-1 flex items-center gap-2">
        <StatusBadge status={project.status} className="text-[10px]" />
        <span className="text-[10px] text-muted-2">·</span>
        <span className="truncate text-[10px] text-muted-2">
          {tCategory(project.category[0])}
        </span>
      </div>
    </Link>
  );
}
