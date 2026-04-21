import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { oils } from "@/data/oils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const oilPages = oils.map((oil) => ({
    url: `${base}/oils/${oil.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...oilPages,
  ];
}
