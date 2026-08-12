const PATHS: Record<string, string> = {
  product:
    "M12 3v6m0 0-3-3m3 3 3-3M5 13h3l2 3 4-6 2 3h3M4 20h16",
  engineering: "m8 6-5 6 5 6m8-12 5 6-5 6M14 4l-4 16",
  ai: "M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m13-2-2-2m-9-9-2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  design:
    "M4 20 15 9m0 0 3-3a2 2 0 0 0-3-3l-3 3m3 3-3-3m0 0L5 15v3h3l6-6",
};

export function CapabilityIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const d = PATHS[name];
  if (!d) return null;

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={className ?? "h-5 w-5 text-foreground"}
      >
        <path d={d} />
      </svg>
    </div>
  );
}
