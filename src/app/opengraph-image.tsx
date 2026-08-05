import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #07111f 0%, #0d2340 58%, #06101c 100%)",
          color: "#f7fbff",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 82,
              height: 82,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #4dd4ff",
              borderRadius: 12,
              background: "#10233c",
              color: "#4dd4ff",
              fontSize: 42,
              fontWeight: 900,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 38, fontWeight: 800 }}>{siteConfig.businessName}</div>
            <div style={{ color: "#a9b8c9", fontSize: 24 }}>Kenya</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ maxWidth: 900, fontSize: 72, lineHeight: 0.98, fontWeight: 900 }}>
            Technology that keeps your business moving.
          </div>
          <div style={{ maxWidth: 920, color: "#d7e2ee", fontSize: 30, lineHeight: 1.35 }}>
            IT support, cybersecurity, software, infrastructure, websites, and automation for
            growing Kenyan organizations.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
