import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import remarkGfm from 'remark-gfm';
import rehypeCallouts from 'rehype-callouts';
import rehypeStarryNight from 'rehype-starry-night';
import rehypeStringify from 'rehype-stringify';

import { z } from 'zod';

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const notes = defineCollection({
	name: 'notes',
	directory: 'content/notes',
	include: '*.md',
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		slug: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		content: z.string()
	}),
	transform: async (document, context) => {
		const html = await compileMarkdown(
			context,
			document,
			{
				remarkPlugins: [
					remarkGfm,
				],
				rehypePlugins: [
					rehypeCallouts,
					rehypeStarryNight,
					rehypeStringify
				]
			}
		);
		return {
			...document,
			html
		};
	}
});

export default defineConfig({
	collections: [notes]
});
