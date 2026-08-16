"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABEL: Record<string, string> = {
  en: "EN",
  id: "ID",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border p-0.5 text-xs",
        className
      )}
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          aria-current={locale === activeLocale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === activeLocale
              ? "bg-accent text-background"
              : "text-muted hover:text-accent"
          )}
        >
          {LOCALE_LABEL[locale]}
        </Link>
      ))}
    </div>
  );
}
