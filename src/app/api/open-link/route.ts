import { createHash, timingSafeEqual } from "node:crypto";
import { resolveProjectLink } from "@/data/projects";

// SHA-256 of the PIN. To change the PIN, replace this hash.
const PIN_SHA256 = "888b19a43b151683c87895f6211d9f8640f97bdc8ef32f03dbe057c8f5e56d32";
const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000;

// Per-instance only: slows guessing, but serverless instances do not share this map.
const failures = new Map<string, { count: number; until: number }>();

const digest = (value: string) => createHash("sha256").update(value).digest();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const record = failures.get(ip);
  if (record && record.until > Date.now() && record.count >= MAX_FAILURES) {
    return Response.json({ error: "locked" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const { slug, linkKey, pin: attempt } = body ?? {};
  if (typeof slug !== "string" || typeof linkKey !== "string" || typeof attempt !== "string") {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  if (!timingSafeEqual(digest(attempt), Buffer.from(PIN_SHA256, "hex"))) {
    const active = record && record.until > Date.now();
    failures.set(ip, { count: active ? record.count + 1 : 1, until: Date.now() + LOCK_MS });
    return Response.json({ error: "wrong" }, { status: 401 });
  }

  failures.delete(ip);
  const url = resolveProjectLink(slug, linkKey);
  if (!url) return Response.json({ error: "invalid" }, { status: 404 });
  return Response.json({ url }, { headers: { "Cache-Control": "no-store" } });
}
