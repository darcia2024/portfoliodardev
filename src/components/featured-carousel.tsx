"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  motion,
  useMotionValue,
  animate,
  PanInfo,
} from "framer-motion";
import type { Project } from "@/data/types";
import { StatusBadge } from "./status-badge";
import { PreviewPlaceholder } from "./preview-placeholder";
import { cn } from "@/lib/utils";

function Chevron({ dir, className }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={cn("h-5 w-5", className)}
      style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "").replace(/^www\./, "");
}

export function FeaturedCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const t = useTranslations("featuredRow");
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const count = projects.length;
  // 1 card on mobile, 2 on md, 3 on lg
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const getColsForWidth = (w: number) => (w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    const update = () => setCols(getColsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const clamp = useCallback(
    (i: number) => Math.max(0, Math.min(i, count - cols)),
    [count, cols]
  );

  const goTo = useCallback(
    (i: number) => {
      setActive(clamp(i));
    },
    [clamp]
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 80) {
      goTo(active + (info.offset.x < 0 ? cols : -cols));
    } else if (Math.abs(info.velocity.x) > 400) {
      goTo(active + (info.velocity.x < 0 ? cols : -cols));
    }
  };

  const x = useMotionValue(0);
  useEffect(() => {
    animate(x, active * -100, {
      type: "spring",
      stiffness: 260,
      damping: 32,
      mass: 1,
    });
  }, [active, x]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(active + cols);
      if (e.key === "ArrowLeft") goTo(active - cols);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [active, cols, goTo]);

  return (
    <div
      ref={containerRef}
      className="relative mt-12 overflow-hidden outline-none"
      tabIndex={0}
      aria-label={t("carouselLabel")}
    >
      {/* Track */}
      <motion.div className="hidden" aria-hidden>
        <span />
      </motion.div>

      {/* Multi-column view (tablet/desktop): sliced pages of 2/3 cards */}
      {cols > 1 && (
        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-${cols}`}
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {projects.slice(active, active + cols).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-[24px] border border-border bg-surface p-6 transition-colors hover:border-accent/40 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="kicker">
                    <span>
                      {String(active + i + 1).padStart(2, "0")} / {project.type}
                    </span>
                  </p>
                  <StatusBadge status={project.status} />
                </div>

                <Link href={`/work/${project.slug}`} className="mt-6 block">
                  <PreviewPlaceholder
                    label={project.title}
                    brandColor={project.brandColor}
                    cover={project.cover}
                  />
                </Link>

                <div className="mt-7">
                  <h3 className="font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-base text-muted md:text-lg">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-7">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {t("readCaseStudy")}
                    <Chevron dir="right" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  {project.liveUrl && !project.hideLiveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {t("visitLiveSite")}
                      <Chevron dir="right" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.secondaryUrl && (
                    <a
                      href={project.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {stripProtocol(project.secondaryUrl)}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <div className="pointer-events-none mt-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => goTo(active - cols)}
                disabled={active === 0}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => goTo(active + cols)}
                disabled={active >= count - cols}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
              >
                <Chevron dir="right" />
              </button>
            </div>

            {/* Dots */}
            <div className="pointer-events-auto flex items-center gap-2">
              {Array.from({ length: count - cols + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Page ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={
                    i === active
                      ? "h-2 w-8 rounded-full bg-foreground transition-all dark:bg-accent"
                      : "h-2 w-2 rounded-full bg-border transition-all hover:bg-muted-2"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile view (1 card at a time, swipeable) */}
      {cols === 1 && (
        <div
          className="relative overflow-hidden"
          onMouseDown={() => setDragging(true)}
          onMouseUp={() => setDragging(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{ x, cursor: dragging ? "grabbing" : "grab", width: `${count * 100}%` }}
            className="flex"
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="px-3"
                style={{ width: `${100 / count}%`, flexShrink: 0 }}
              >
                <div className="group flex flex-col rounded-[24px] border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                  <div className="flex items-start justify-between gap-4">
                    <p className="kicker">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {project.type}
                      </span>
                    </p>
                    <StatusBadge status={project.status} />
                  </div>

                  <Link href={`/work/${project.slug}`} className="mt-5 block">
                    <PreviewPlaceholder
                      label={project.title}
                      brandColor={project.brandColor}
                      compact
                      cover={project.cover}
                    />
                  </Link>

                  <div className="mt-6">
                    <h3 className="font-display text-2xl leading-[1.12] tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm text-muted">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {t("readCaseStudy")}
                      <Chevron dir="right" className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    {project.liveUrl && !project.hideLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                      >
                        {t("visitLiveSite")}
                        <Chevron dir="right" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Mobile dots */}
      {cols === 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={
                i === active
                  ? "h-2 w-8 rounded-full bg-foreground transition-all dark:bg-accent"
                  : "h-2 w-2 rounded-full bg-border transition-all hover:bg-muted-2"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
