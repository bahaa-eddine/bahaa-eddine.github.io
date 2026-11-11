import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bahaa Eddine Elbaghazaoui · Professor of Computer Science & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0b0d12 0%, #141b3a 60%, #2f4bd8 140%)",
          color: "#eceef3",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 18 }}>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#8b9bff", fontFamily: "monospace" }}>
            Professor · PhD in AI · Engineer
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 600 }}>Bahaa Eddine Elbaghazaoui</div>
          <div style={{ fontSize: 30, color: "#b9bfd0", fontFamily: "sans-serif" }}>
            ENSA Béni Mellal · Data profiling · Generative AI · DevSecOps
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 18, fontFamily: "sans-serif", fontSize: 22 }}>
            {["5 edited books", "25+ publications", "1,000+ hours taught"].map((t) => (
              <div key={t} style={{ padding: "10px 18px", borderRadius: 999, border: "1px solid #3a4260", background: "rgba(255,255,255,0.04)" }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={340} alt="" style={{ marginLeft: 40 }} />
      </div>
    ),
    size,
  );
}
