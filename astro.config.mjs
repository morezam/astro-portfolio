import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	server: {
		port: 4321,
	},
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro',
		},
		remarkPlugins: [remarkReadingTime],
	},
});
