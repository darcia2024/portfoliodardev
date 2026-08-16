import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/**
 * Renders the project preview for the featured row and rich cards.
 * When a `cover` path is provided, the real screenshot/mockup is shown
 * (framed with the same editorial rounded border + corner ticks).
 * Otherwise an editorial "coming soon" placeholder is rendered.
 */
export function PreviewPlaceholder({
  label,
  brandColor,
  className,
  compact = false,
  cover,
}: {
  label: string;
  brandColor?: string;
  className?: string;
  compact?: boolean;
  cover?: string;
}) {
  const t = useTranslations("preview");

  const corner =
    "absolute h-3 w-3 border-accent/60 transition-colors group-hover:border-accent z-10";

  return (
    <div
      className={cn(
        "lift group relative flex w-full items-center justify-center overflow-hidden rounded-[28px] border border-border bg-surface-2",
        compact ? "aspect-[4/3]" : "aspect-[16/10]",
        className
      )}
      style={
        brandColor && !cover
          ? {
              background: `linear-gradient(150deg, ${brandColor}10, var(--surface-2))`,
            }
          : undefined
      }
    >
      {/* Corner ticks */}
      <span className={cn(corner, "left-5 top-5 border-l border-t")} />
      <span className={cn(corner, "right-5 top-5 border-r border-t")} />
      <span className={cn(corner, "bottom-5 left-5 border-b border-l")} />
      <span className={cn(corner, "bottom-5 right-5 border-b border-r")} />

      {cover ? (
        <Image
          src={cover}
          alt={`${label} — preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={false}
        />
      ) : (
        <div className="flex flex-col items-center gap-2 px-6 text-center">
          <span
            className="font-display text-2xl italic tracking-tight text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-3xl"
            aria-hidden
          >
            {label}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-2">
            {t("comingSoon")}
          </span>
        </div>
      )}
    </div>
  );
}
