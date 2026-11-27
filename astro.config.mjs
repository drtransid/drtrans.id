// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config/site.ts';

const noindexPaths = ['/cookies/', '/privacy/', '/terms/'];

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !noindexPaths.includes(new URL(page).pathname),
    }),
  ],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
      hmr: false,
    },
  },
});
