import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			'content-collections': './.content-collections/generated'
		},
		prerender: {
			origin: 'https://gitoido-mc.github.io',
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			handleHttpError: ({ path, referrer, message }) => {
				if (path === '/not-found') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
