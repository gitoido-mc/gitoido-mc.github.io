<script lang="ts">
	import type { PageProps } from './$types';
	import ListNote from '$lib/notes/ListNote.svelte';

	let { data }: PageProps = $props();
</script>

<style>
    .latest-notes__heading {
        --pico-font-size: 1.2rem;
    }

    .latest-notes {
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        .latest-notes {
            grid-template-columns: 1fr 1fr;
        }
    }

    .latest-notes {
        display: grid;
        gap: var(--gutter-compensation, 1rem);
        grid-auto-flow: row;
    }
</style>
<section>
	<h2 class="latest-notes__heading">Latest notes</h2>
	<hr>
	<div class="latest-notes">
		{#each data.notes as note (note.slug)}
			<ListNote class="no-margin" {...note} />
		{/each}
	</div>
</section>