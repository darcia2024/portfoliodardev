"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";

export function MobileNav({
  nav,
}: {
  nav: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const t = useTranslations("nav");

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={t("toggleMenu")}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
          open
            ? "border-accent bg-accent text-background"
            : "border-border text-foreground hover:border-accent hover:text-accent"
        )}
      >
        <span className="relative block h-5 w-5">
          <span
            className={cn(
              "absolute left-0 top-[6px] h-px w-5 bg-current transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[13px] h-px w-5 bg-current transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </span>
      </button>

      {open && (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full z-40 h-[calc(100svh-4rem)] border-t border-border bg-background md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-6 sm:px-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="kicker">Daru Dev</p>
              <span className="text-xs text-muted">Portfolio</span>
            </div>

            <nav aria-label="Mobile navigation" className="mt-3">
              {nav.map((item, index) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex min-h-16 items-center justify-between border-b border-border py-3 font-display text-[clamp(1.65rem,7vw,2.25rem)] tracking-tight transition-colors",
                  active ? "text-accent" : "text-foreground hover:text-accent"
                )}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "text-lg transition-transform group-hover:translate-x-1",
                    active ? "opacity-100" : "opacity-45"
                  )}
                >
                  -&gt;
                </span>
              </Link>
                );
              })}
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent/85"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9.18 9.18 0 0 1-4-.9L3 21l1.8-4.5A8.5 8.5 0 1 1 21 11.5Z" />
                <path d="M8.5 8.5c.25 1.9 1.15 3.55 2.7 4.95 1.36 1.23 2.95 1.96 4.75 2.2l.8-1.6-2.25-1.2-.95.65a8.25 8.25 0 0 1-2.95-2.75l.6-1-1.3-2.2Z" />
              </svg>
              {t("letsTalk")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
