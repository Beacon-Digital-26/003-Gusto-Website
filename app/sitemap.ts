import type { MetadataRoute } from "next";
import { images, products, site } from "./lib/site-data";

// Single-page site: section anchors are not separate URLs, so only "/" is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        images.heroProduct,
        images.aboutRolls,
        ...products.flatMap((product) => (product.image ? [product.image] : [])),
      ].map((path) => new URL(path, site.url).toString()),
    },
  ];
}
