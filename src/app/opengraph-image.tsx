import { ImageResponse } from "next/og";

// Link-preview image, generated at build time. Replaces the stock photo that
// was used before.
export const alt = "PSAI Power — power system engineering, Sudbury, Ontario";
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
          background: "#172A3A",
          color: "#FFFFFF",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 20, height: 20, background: "#F2B705", marginRight: 18 }} />
          PSAI Power
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          When protection is designed right, nothing happens.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 6, width: "100%", background: "#F2B705" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 22,
              fontSize: 28,
              color: "#C3CCD2",
            }}
          >
            <span>Power system engineering</span>
            <span>Sudbury, Ontario</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
