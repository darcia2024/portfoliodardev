"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";
import { PreviewPlaceholder } from "./preview-placeholder";
import { cn } from "@/lib/utils";

const Arrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
    className={cn("h-4 w-4", className)}
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "").replace(/^www\./, "");
}

export function FeaturedProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const t = useTranslations("featuredRow");
  const showLiveUrl = Boolean(project.liveUrl && !project.hideLiveUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "grid grid-cols-1 items-center gap-7 border-t border-border py-12 first:border-t-0 first:pt-0 sm:gap-10 sm:py-16 md:grid-cols-12 md:gap-12 md:py-24"
      )}
    >
      <div
        className={cn(
          "md:col-span-5",
          reversed ? "md:order-2" : "md:order-1"
        )}
      >
        <p className="kicker">
          <span>
            {String(index + 1).padStart(2, "0")} / {project.type}
          </span>
        </p>
        <h3 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl md:mt-5 md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-md text-pretty text-base text-muted md:text-lg">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {t("readCaseStudy")}
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {showLiveUrl && (
            <a
              href={project.liveUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              {t("visitLiveSite")}
              <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.secondaryUrl && (
            <a
              href={project.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              {stripProtocol(project.secondaryUrl)}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
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
            cover={project.cover}
          />
        </Link>
      </div>
    </motion.div>
  );
}
