import type { MetadataRoute } from "next";

import { absoluteUrl, publicRoutes } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: route.href === "/" ? `${absoluteUrl("/")}/` : absoluteUrl(route.href),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
