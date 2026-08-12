import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.15, maxWidth: 900 }}>
            I build digital products from idea to launch.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#6b6a63" }}>
            Digital Product Builder · Indonesia / Cairo
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
