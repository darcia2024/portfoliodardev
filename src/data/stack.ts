/**
 * Curated tech stack & tools used across Daru's projects.
 * Categories mirror the capability areas on the home page.
 * Item display names live in messages (stack.items.*), so they are
 * translatable EN/ID without touching this file.
 */
export type StackCategory = "frontend" | "fullstack" | "ai" | "tools";

export type StackItem = {
  slug: string;
  category: StackCategory;
  /** Translation key inside the `stack` namespace. */
  nameKey: string;
};

export const STACK_ITEMS: StackItem[] = [
  // Frontend
  { slug: "next-js", category: "frontend", nameKey: "next" },
  { slug: "react", category: "frontend", nameKey: "react" },
  { slug: "typescript", category: "frontend", nameKey: "typescript" },
  { slug: "tailwindcss", category: "frontend", nameKey: "tailwind" },
  { slug: "framer-motion", category: "frontend", nameKey: "framerMotion" },
  { slug: "zustand", category: "frontend", nameKey: "zustand" },
  // Fullstack
  { slug: "node-js", category: "fullstack", nameKey: "node" },
  { slug: "prisma", category: "fullstack", nameKey: "prisma" },
  { slug: "postgresql", category: "fullstack", nameKey: "postgresql" },
  { slug: "drizzle", category: "fullstack", nameKey: "drizzle" },
  { slug: "trpc", category: "fullstack", nameKey: "trpc" },
  { slug: "vercel", category: "fullstack", nameKey: "vercel" },
  // AI
  { slug: "openai", category: "ai", nameKey: "openai" },
  { slug: "llm-integration", category: "ai", nameKey: "llm" },
  { slug: "v0", category: "ai", nameKey: "v0" },
  { slug: "prompt-engineering", category: "ai", nameKey: "prompt" },
  // Tools & Design
  { slug: "figma", category: "tools", nameKey: "figma" },
  { slug: "vscode", category: "tools", nameKey: "vscode" },
  { slug: "linear", category: "tools", nameKey: "linear" },
];

export const STACK_CATEGORIES: {
  key: StackCategory;
  /** Translation key inside the `stack` namespace. */
  labelKey: string;
  /** Translation key inside the `stack` namespace. */
  introKey: string;
}[] = [
  { key: "frontend", labelKey: "frontendLabel", introKey: "frontendIntro" },
  { key: "fullstack", labelKey: "fullstackLabel", introKey: "fullstackIntro" },
  { key: "ai", labelKey: "aiLabel", introKey: "aiIntro" },
  { key: "tools", labelKey: "toolsLabel", introKey: "toolsIntro" },
];
