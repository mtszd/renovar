import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://renovarenergia.ar/",
  integrations: [mdx(), sitemap(), svelte()],
  output: "server",
  adapter: vercel({ runtime: "nodejs" }),
});
