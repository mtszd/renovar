import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: 'https://sunvey.com',
  integrations: [mdx(), sitemap(), svelte()],
  output: "server",
  adapter: vercel()
});