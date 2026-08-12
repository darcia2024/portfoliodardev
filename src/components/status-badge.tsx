import { useTranslations } from "next-intl";
import type { ProjectStatus } from "@/data/types";
import { cn } from "@/lib/utils";

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
  const t = useTranslations("status");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", STATUS_DOT[status])} />
      {t(status)}
    </span>
  );
}
