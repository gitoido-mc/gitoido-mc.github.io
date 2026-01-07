import type {PageLoad} from './$types';
import type {Tag} from '$lib/types';
import { allNotes } from 'content-collections';

export const load: PageLoad = async () => {
	const tags: Tag[] = [];

	// This will be calculated on prerender step of build,
	// so i don't really care about performance
	allNotes
		.forEach((value) => {
			value.tags.forEach((value) => {
				const tag = { name: value, notes: 1 } as Tag

				if (tags.indexOf(tag) !== -1) {
					tags.push(tag)
				} else {
					tags[tags.indexOf(tag)].notes += 1
				}
			})
		})

	return {
		title: "All tags - Gito's modding ponders",
		tags: tags
	}
}