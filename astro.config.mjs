import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { remarkReadingTime } from './remark-reading-time.mjs';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    },
    remarkPlugins: [remarkReadingTime]
  },
  output: "server",
  adapter: vercel()
});