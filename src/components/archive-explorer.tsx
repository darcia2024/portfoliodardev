"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/types";
import { ALL_CATEGORIES } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

type ArchiveCategory = (typeof ALL_CATEGORIES)[number];

export function ArchiveExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ArchiveCategory>("All");
  const [query, setQuery] = useState("");

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
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
                category === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-foreground/40 sm:w-64"
        />
      </div>

      <p className="mt-6 text-xs text-muted-2">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-2">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="py-12 text-sm text-muted">
            No projects match that filter yet.
          </p>
        )}
      </div>
    </div>
  );
}
