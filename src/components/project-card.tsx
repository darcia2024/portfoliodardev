import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projectCard");
  const tCategory = useTranslations("categories");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col justify-between gap-6 border-b border-border py-7 first:pt-0 md:flex-row md:items-center md:gap-10"
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-muted md:text-2xl">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-xs text-muted-2">{project.year}</span>
          )}
        </div>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <StatusBadge status={project.status} />
          <span className="text-xs text-muted-2">·</span>
          <span className="text-xs text-muted-2">
            {project.category.map((c) => tCategory(c)).join(" / ")}
          </span>
        </div>
      </div>

      <span className="hidden shrink-0 text-sm text-muted-2 transition-transform group-hover:translate-x-1 group-hover:text-foreground md:inline-block">
        {t("viewCaseStudy")}
      </span>
    </Link>
  );
}
