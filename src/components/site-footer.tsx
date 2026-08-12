import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="mt-32 border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl tracking-tight text-foreground">
            {t("heading")}
          </p>
          <p className="mt-3 text-sm text-muted">{t("subheading")}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
          >
            {t("getInTouch")}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-2">
              {t("siteLabel")}
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/work" className="hover:text-foreground">
                  {tNav("work")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-foreground">
                  {tNav("archive")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-2">
              {t("connectLabel")}
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="mailto:darciamuliathiifa@gmail.com"
                  className="hover:text-foreground"
                >
                  {t("email")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/darufahma-rgb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {t("github")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("copyright", { year })}</p>
        <p>{t("tagline")}</p>
      </Container>
    </footer>
  );
}
