import type {PageLoad} from './$types';
import { allNotes } from 'content-collections';

export const load: PageLoad = async () => {
	return {
		title: "All notes - Gito's modding ponders",
		notes: allNotes.toSorted((a, b) => b.date.getTime() - a.date.getTime())
	}
}