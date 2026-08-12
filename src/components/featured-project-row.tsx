"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";
import { PreviewPlaceholder } from "./preview-placeholder";
import { cn } from "@/lib/utils";

export function FeaturedProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "grid grid-cols-1 items-center gap-10 border-t border-border py-16 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8 md:py-24"
      )}
    >
      <div
        className={cn(
          "md:col-span-5",
          reversed ? "md:order-2" : "md:order-1"
        )}
      >
        <span className="font-mono text-xs text-muted-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-4xl tracking-tight text-balance text-foreground md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm uppercase tracking-wide text-muted-2">
          {project.type}
        </p>
        <p className="mt-5 max-w-md text-pretty text-base text-muted md:text-lg">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={`/work/${project.slug}`}
            className="text-sm text-foreground underline underline-offset-4"
          >
            Read case study →
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground"
            >
              Visit live site ↗
            </a>
          )}
        </div>
      </div>

      <div
        className={cn(
          "md:col-span-7",
          reversed ? "md:order-1" : "md:order-2"
        )}
      >
        <Link href={`/work/${project.slug}`} className="block">
          <PreviewPlaceholder
            label={project.title}
            brandColor={project.brandColor}
          />
        </Link>
      </div>
    </motion.div>
  );
}
