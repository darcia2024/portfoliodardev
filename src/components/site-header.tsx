"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { SquiggleText } from "./squiggle-text";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const NAV = [
    { href: "/work", label: t("work") },
    { href: "/about", label: t("about") },
    { href: "/archive", label: t("archive") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-foreground"
        >
          <SquiggleText>Daru</SquiggleText>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm text-foreground transition-colors hover:border-foreground/40"
          >
            {t("letsTalk")}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <MobileNav key={pathname} nav={NAV} />
        </div>
      </Container>
    </header>
  );
}
