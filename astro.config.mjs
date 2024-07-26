import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  redirects: {
    "/feed": "/feed.xml",
    "/rss": "/feed.xml",
    "/rss.xml": "/feed.xml",
  },
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
