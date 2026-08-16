import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import { MailIcon, WhatsAppIcon } from "./contact-icons";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-foreground text-background dark:bg-background dark:text-foreground dark:[&_.footer-muted]:text-foreground/50 dark:[&_.footer-muted-soft]:text-foreground/70 dark:[&_.footer-link]:hover:text-accent dark:[&_.footer-rule]:border-foreground/15">
      <Container className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16 md:flex-row md:items-start md:justify-between md:py-20">
        <div className="max-w-md">
          <p className="footer-muted font-mono text-[10px] uppercase tracking-[0.25em] text-background/50 dark:text-foreground/50">
            {t("connectLabel")}
          </p>
          <p className="mt-4 font-display text-3xl italic leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t("heading")}
          </p>
          <p className="footer-muted-soft mt-4 max-w-sm text-sm leading-relaxed text-background/70 dark:text-foreground/70">
            {t("subheading")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm transition-colors hover:text-accent"
          >
            {t("getInTouch")}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:gap-10 sm:grid-cols-3">
          <div>
          <p className="footer-muted font-mono text-[10px] uppercase tracking-[0.25em] text-background/50 dark:text-foreground/50">
            {t("siteLabel")}
          </p>
            <ul className="footer-muted-soft mt-4 space-y-2.5 text-background/70 dark:text-foreground/70">
              <li>
                <Link href="/work" className="footer-link transition-colors hover:text-background dark:hover:text-accent">
                  {tNav("work")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link transition-colors hover:text-background dark:hover:text-accent">
                  {tNav("about")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-muted font-mono text-[10px] uppercase tracking-[0.25em] text-background/50 dark:text-foreground/50">
              {t("connectLabel")}
            </p>
            <ul className="mt-4 space-y-2.5 text-background/70 dark:text-foreground/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-center gap-2 transition-colors hover:text-background dark:hover:text-accent"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/20 dark:border-foreground/20">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  {t("whatsapp")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="footer-link inline-flex items-center gap-2 transition-colors hover:text-background dark:hover:text-accent"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/20 dark:border-foreground/20">
                    <MailIcon className="h-3.5 w-3.5" />
                  </span>
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="footer-rule flex flex-col gap-2 border-t border-background/15 dark:border-foreground/15 py-6 font-mono text-[11px] leading-relaxed text-background/50 dark:text-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
        <p>{t("copyright", { year })}</p>
        <p>{t("tagline")}</p>
      </Container>
    </footer>
  );
}
