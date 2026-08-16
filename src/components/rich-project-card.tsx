"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";
import { PreviewPlaceholder } from "./preview-placeholder";

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
      className="flex flex-col"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <PreviewPlaceholder
          label={project.title}
          brandColor={project.brandColor}
          compact
          cover={project.cover}
        />
      </Link>
      <div className="mt-6 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
          {project.type}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-snug tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty text-sm text-muted">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <StatusBadge status={project.status} />
        </div>
        <div className="mt-4">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
          >
            {t("readCaseStudy")}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
