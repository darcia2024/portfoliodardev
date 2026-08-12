import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="pt-28 pb-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          404
        </p>
        <h1 className="mt-4 text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
          This page doesn&rsquo;t exist yet.
        </h1>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
        >
          ← Back home
        </Link>
      </Container>
    </section>
  );
}
