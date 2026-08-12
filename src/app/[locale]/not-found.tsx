import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="pt-28 pb-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 text-balance font-display text-4xl tracking-tight text-foreground md:text-5xl">
          {t("title")}
        </h1>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-foreground underline underline-offset-4"
        >
          {t("backHome")}
        </Link>
      </Container>
    </section>
  );
}
