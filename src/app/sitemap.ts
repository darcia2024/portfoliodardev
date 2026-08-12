import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";
import { routing } from "@/i18n/routing";

const siteUrl = "https://daru.dev";

function alternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/work", "/archive", "/about", "/contact"];
  const projectPaths = getAllSlugs().map((slug) => `/work/${slug}`);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages: alternates(path) },
      });
    }
    for (const path of projectPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: alternates(path) },
      });
    }
  }

  return entries;
}
