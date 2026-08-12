export type ProjectStatus =
  | "production"
  | "development"
  | "pre-launch"
  | "concept"
  | "client-delivery";

export type ProjectCategory =
  | "AI"
  | "Travel"
  | "Education"
  | "Product"
  | "Web Apps"
  | "Internal Tools"
  | "Branding"
  | "Client Work"
  | "Experiments";

export type ConfidenceLevel = "verified" | "partial" | "incomplete";

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  summary?: string;

  category: ProjectCategory[];
  type: string;

  status: ProjectStatus;
  confidence: ConfidenceLevel;
  featured: boolean;

  role?: string[];
  year?: string;

  liveUrl?: string;
  githubUrl?: string;

  brandColor?: string;
  gallery?: string[];

  problem?: string;
  productThinking?: string;
  solution?: string;
  designDirection?: string;
  technicalBuild?: string;
  challenges?: string;
  lessons?: string;

  notes?: string;
}
