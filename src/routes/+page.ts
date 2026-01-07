import { allNotes } from 'content-collections';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		notes: allNotes
			.toSorted((a, b) => b.date.getTime() - a.date.getTime())
			.slice(0, 5)
	};
};
