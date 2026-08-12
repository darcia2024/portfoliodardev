"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MobileNav({
  nav,
}: {
  nav: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={cn(
            "h-px w-5 bg-foreground transition-transform",
            open && "translate-y-[3.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-px w-5 bg-foreground transition-transform",
            open && "-translate-y-[3.5px] -rotate-45"
          )}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4 md:px-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
