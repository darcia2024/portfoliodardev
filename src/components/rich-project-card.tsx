"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";
import { PreviewPlaceholder } from "./preview-placeholder";

/**
 * A grid-based alternative to FeaturedProjectRow — same content depth
 * (preview, type, description, status, links) but stacked vertically in a
 * card instead of a left/right split, so "Selected Work" doesn't repeat
 * the same split layout for every featured project.
 */
export function RichProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const t = useTranslations("featuredRow");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <PreviewPlaceholder label={project.title} brandColor={project.brandColor} compact />
      </Link>
      <h3 className="mt-5 font-display text-2xl tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted-2">
        {project.type}
      </p>
      <p className="mt-3 text-pretty text-sm text-muted">
        {project.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <StatusBadge status={project.status} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="text-sm text-foreground underline underline-offset-4"
        >
          {t("readCaseStudy")}
        </Link>
      </div>
    </motion.div>
  );
}
