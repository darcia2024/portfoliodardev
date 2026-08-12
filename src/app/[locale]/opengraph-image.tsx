import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          color: "#14130f",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 2 }}>
          DARU
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", fontSize: 60, lineHeight: 1.15, maxWidth: 900 }}>
            {t("heroTitle")}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#6b6a63" }}>
            {tMeta("title")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
