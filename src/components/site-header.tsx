"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { SquiggleText } from "./squiggle-text";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const NAV = [
    { href: "/work", label: t("work") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="shrink-0 font-display text-lg italic tracking-tight text-foreground sm:text-xl"
        >
          <SquiggleText>Dar Dev</SquiggleText>
          <span className="ml-1.5 hidden align-baseline text-[10px] uppercase tracking-[0.25em] not-italic text-muted-2 min-[390px]:inline">
            Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-1 text-sm transition-colors hover:text-foreground",
                  active
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-accent"
                    : "text-muted after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t("letsTalk")}
          </a>
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-1.5 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav key={pathname} nav={NAV} />
        </div>
      </Container>
    </header>
  );
}
