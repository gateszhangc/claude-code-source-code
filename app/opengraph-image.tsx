import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          background:
            "radial-gradient(circle at 12% 16%, rgba(245, 179, 117, 0.55), transparent 26%), radial-gradient(circle at 86% 12%, rgba(82, 129, 214, 0.32), transparent 24%), linear-gradient(180deg, #f7f2e7 0%, #f3ead9 100%)",
          color: "#132647",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(19,38,71,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19,38,71,0.05) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.12))",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(19,38,71,0.08)",
            background: "rgba(255,255,255,0.76)",
            boxShadow: "0 28px 80px -46px rgba(11,25,52,0.68)",
            padding: "44px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(160deg, #12213b 0%, #2f4b7c 62%, #e57c2e 130%)",
                color: "#f8f3e9",
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              {"</>"}
            </div>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#5f6f8b",
              }}
            >
              Professional Source Map Guide
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                fontSize: "74px",
                lineHeight: 0.95,
                fontWeight: 800,
                letterSpacing: "-0.05em",
                maxWidth: "900px",
              }}
            >
              Claude Code Source Code
            </div>
            <div
              style={{
                fontSize: "28px",
                lineHeight: 1.45,
                maxWidth: "900px",
                color: "#44516a",
              }}
            >
              Public repo, source map context, authoritative docs, and FAQ.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "20px",
              color: "#44516a",
            }}
          >
            <div>{siteConfig.domain}</div>
            <div>GitHub repo + Reddit thread</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
