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

/** A lightweight reference to a sibling product within the same ecosystem (see Project.subProjects). */
export interface SubProject {
  title: string;
  description: string;
  url?: string;
  /** Set on public data, where the url itself is removed and sits behind the PIN. */
  hasLink?: boolean;
}

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
  hideLiveUrl?: boolean;
  secondaryUrl?: string;
  githubUrl?: string;
  /** Which of the URLs above exist; public data carries this instead of the URLs. */
  lockedLinks?: { live: boolean; secondary: boolean; github: boolean };

  brandColor?: string;

  /** Editorial cover screenshot/mockup shown in the featured row and rich cards (path under public/). */
  cover?: string;
  gallery?: string[];

  /** Sibling products in the same ecosystem, absorbed into this entry instead of listed separately. */
  subProjects?: SubProject[];

  problem?: string;
  productThinking?: string;
  solution?: string;
  designDirection?: string;
  technicalBuild?: string;
  challenges?: string;
  lessons?: string;
  outcomes?: string[];

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
    | "outcomes"
    | "notes"
    | "subProjects"
  >
>;

export type ProjectTranslations = Record<string, TranslatableProjectFields>;
