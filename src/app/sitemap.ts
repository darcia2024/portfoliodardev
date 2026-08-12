import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";

const siteUrl = "https://daru.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/archive", "/about", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );

  const projectRoutes = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
