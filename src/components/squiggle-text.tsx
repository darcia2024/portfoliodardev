import { cn } from "@/lib/utils";

/**
 * A hand-drawn-style wavy underline accent, borrowed from the Travelwise
 * reference (squiggle beneath emphasized words) but kept monochrome to fit
 * the portfolio's neutral palette.
 */
export function SquiggleText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute -bottom-1.5 left-0 h-2.5 w-full text-foreground/35"
      >
        <path
          d="M0,7 Q4.17,2 8.33,7 T16.67,7 T25,7 T33.33,7 T41.67,7 T50,7 T58.33,7 T66.67,7 T75,7 T83.33,7 T91.67,7 T100,7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
