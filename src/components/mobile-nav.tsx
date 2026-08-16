"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";

export function MobileNav({
  nav,
}: {
  nav: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <>
      <button
        type="button"
        aria-label={t("toggleMenu")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center md:hidden"
      >
        <span className="relative block h-5 w-5">
          <span
            className={cn(
              "absolute left-0 top-[6px] h-px w-5 bg-foreground transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[13px] h-px w-5 bg-foreground transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 border-t border-border bg-background/98 backdrop-blur-md md:hidden">
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background dark:bg-accent dark:text-background"
            >
              {t("letsTalk")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
