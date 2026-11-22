import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { images } from "./lib/site-data";

export const alt = "Gusto Pro heavy duty garbage bags - Trash Bag Built Tough";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const readPublic = async (path: string) =>
  `data:image/png;base64,${await readFile(join(process.cwd(), "public", path), "base64")}`;

const logoSrc = await readPublic("/images/logo-footer.png");
const productSrc = await readPublic(images.heroProduct);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 72px",
          background: "linear-gradient(135deg, #ff7a00 0%, #f05a00 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={260} height={114} alt="" />
          <div
            style={{
              marginTop: 32,
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            Trash Bag Built Tough
          </div>
          <div style={{ marginTop: 28, fontSize: 28, opacity: 0.9 }}>
            Heavy duty 3-layer garbage bags · Holds 35KG
          </div>
          <div style={{ marginTop: 12, fontSize: 26, opacity: 0.8 }}>
            Heng Heng Plastic Trading, Malaysia
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={productSrc} width={480} height={536} alt="" />
      </div>
    ),
    size,
  );
}
