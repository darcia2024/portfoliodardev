import type { ProjectStatus } from "@/data/types";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  production: "Production",
  development: "In Development",
  "pre-launch": "Pre-launch",
  concept: "Concept",
  "client-delivery": "Client Delivery",
};

const STATUS_DOT: Record<ProjectStatus, string> = {
  production: "bg-emerald-600",
  development: "bg-amber-500",
  "pre-launch": "bg-sky-500",
  concept: "bg-muted-2",
  "client-delivery": "bg-violet-500",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", STATUS_DOT[status])} />
      {STATUS_LABEL[status]}
    </span>
  );
}
