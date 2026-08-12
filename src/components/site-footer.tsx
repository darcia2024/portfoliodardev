import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl tracking-tight text-foreground">
            Let&rsquo;s build something.
          </p>
          <p className="mt-3 text-sm text-muted">
            Open to product, engineering, AI, and brand work — Indonesia /
            Cairo.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
          >
            Get in touch →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-2">
              Site
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/work" className="hover:text-foreground">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-foreground">
                  Archive
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-2">
              Connect
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="mailto:darciamuliathiifa@gmail.com"
                  className="hover:text-foreground"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/darufahma-rgb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Daru. Digital Product Builder.</p>
        <p>Designed &amp; built end-to-end.</p>
      </Container>
    </footer>
  );
}
