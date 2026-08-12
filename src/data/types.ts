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

/** Fields that get translated per-locale via a translation overlay (see projects.id.json). */
export type TranslatableProjectFields = Partial<
  Pick<
    Project,
    | "shortDescription"
    | "summary"
    | "type"
    | "problem"
    | "productThinking"
    | "solution"
    | "designDirection"
    | "technicalBuild"
    | "challenges"
    | "lessons"
    | "notes"
  >
>;

export type ProjectTranslations = Record<string, TranslatableProjectFields>;
