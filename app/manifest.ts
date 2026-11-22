import type { MetadataRoute } from "next";
import { site } from "./lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} by ${site.company}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff7a00",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
