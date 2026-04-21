import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chetana Cold Pressed Oils — Challakere, Karnataka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdf8ee",
          position: "relative",
        }}
      >
        {/* Golden top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#c48a00",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#fef3c7",
            border: "1.5px solid #f0d88a",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#c48a00",
            }}
          />
          <span style={{ fontSize: 18, color: "#92650a", fontWeight: 700, letterSpacing: 2 }}>
            CHALLAKERE, KARNATAKA
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#1c1209",
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Chetana
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#c48a00",
            fontWeight: 700,
            marginBottom: 24,
            letterSpacing: 1,
          }}
        >
          Cold Pressed Oils
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#6b4c1e",
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Real Oil from Real Seeds
        </div>

        {/* Golden bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#c48a00",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
