import type { PageLoad } from './$types';
import { allNotes } from 'content-collections';

export const load: PageLoad = async ({ params }) => {
	return {
		title: `All notes under #${params.slug} tag - Gito's modding ponders`,
		tag: params.slug,
		notes: allNotes
			.filter((value) => value.tags.indexOf(params.slug) !== -1)
			.toSorted((a, b) => b.date.getTime() - a.date.getTime())
	}
}