"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Project, ProjectCategory } from "@/data/types";
import { ALL_CATEGORIES } from "@/data/categories";
import { CompactProjectCard } from "./compact-project-card";
import { cn } from "@/lib/utils";

type ArchiveCategory = (typeof ALL_CATEGORIES)[number];

export function ArchiveExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ArchiveCategory>("All");
  const [query, setQuery] = useState("");
  const t = useTranslations("explorer");
  const tCategory = useTranslations("categories");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        category === "All" ||
        p.category.includes(category as ProjectCategory);
      const matchesQuery =
        query.trim().length === 0 ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        p.type.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [projects, category, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:text-[11px]",
                category === cat
                  ? "border-accent bg-accent text-background"
                  : "border-border text-muted hover:border-accent/60 hover:text-accent"
              )}
            >
              {tCategory(cat)}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="min-h-12 w-full rounded-full border border-border bg-surface px-5 py-2 text-base text-foreground placeholder:text-muted-2 focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:w-64 sm:min-h-0 sm:text-sm"
        />
      </div>

      <p className="mt-6 text-xs text-muted-2">
        {t("projectCount", { count: filtered.length })}
      </p>

      <div className="mt-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-sm text-muted">{t("noMatches")}</p>
        )}
      </div>
    </div>
  );
}
