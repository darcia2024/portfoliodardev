import { cn } from "@/lib/utils";

/**
 * Renders in place of a real screenshot until one is added to the project
 * data (`gallery` / `cover`). Keeps the site structurally complete while
 * assets are added incrementally — see master content plan §28.
 */
export function PreviewPlaceholder({
  label,
  brandColor,
  className,
  compact = false,
}: {
  label: string;
  brandColor?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2",
        compact ? "aspect-[4/3]" : "aspect-[16/10]",
        className
      )}
      style={
        brandColor
          ? {
              background: `linear-gradient(155deg, ${brandColor}14, var(--surface-2))`,
            }
          : undefined
      }
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <span
          className="font-display text-2xl tracking-tight text-foreground/25 md:text-3xl"
          aria-hidden
        >
          {label}
        </span>
        <span className="text-xs uppercase tracking-widest text-muted-2">
          Preview coming soon
        </span>
      </div>
    </div>
  );
}
