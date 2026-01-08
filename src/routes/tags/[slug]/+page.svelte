<script lang="ts">
	import type { PageProps } from './$types';
	import ListNote from '$lib/notes/ListNote.svelte';
	import Seo from 'sk-seo';

	let { data }: PageProps = $props();
</script>

<style>
    .all-notes__heading {
        --pico-font-size: 1.2rem;
    }

    .all-notes {
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        .all-notes {
            grid-template-columns: 1fr 1fr;
        }
    }

    .all-notes {
        display: grid;
        gap: var(--gutter-compensation, 1rem);
        grid-auto-flow: row;
    }
</style>

<Seo />

<section>
	<h2 class="all-notes__heading">All notes tagged under #{data.tag} tag</h2>
	<div class="all-notes">
		{#each data.notes as note (note.slug)}
			<ListNote class="no-margin" {...note} />
		{/each}
	</div>
</section>