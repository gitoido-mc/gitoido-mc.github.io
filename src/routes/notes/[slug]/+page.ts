import type { PageLoad } from './$types';
import { allNotes } from 'content-collections';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const note = allNotes.find((note) => note.slug === params.slug)

	if (!note) {
		error(404, 'Only wasteland here, Maybe try to look other way? (404)')
	}

	return {
		title: `${note.title} - Gito's modding ponders`,
		note: note
	}
}