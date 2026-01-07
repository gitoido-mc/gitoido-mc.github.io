import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		alias: {
			'content-collections': './.content-collections/generated'
		},
		prerender: {
			origin: 'https://gitoido-mc.github.io'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
