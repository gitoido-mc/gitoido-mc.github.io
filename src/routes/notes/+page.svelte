<script lang="ts">
	import type { PageProps } from './$types';
	import ListNote from '$lib/notes/ListNote.svelte';
	import Seo from 'sk-seo';

	let { data }: PageProps = $props();
</script>

<Seo />

{#each data.notes as note (note.slug)}
	<ListNote {...note} />
{/each}