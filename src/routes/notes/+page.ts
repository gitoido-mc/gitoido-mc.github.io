import type {PageLoad} from './$types';
import { allNotes } from 'content-collections';

export const load: PageLoad = async () => {
	return {
		notes: allNotes.toSorted((a, b) => b.date.getTime() - a.date.getTime())
	}
}