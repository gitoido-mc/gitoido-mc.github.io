<script lang="ts">
	import DetailNote from '$lib/notes/DetailNote.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<style>
	.note__heading {
      --pico-font-size: 1.2rem;
	}
</style>

<section>
	<h2 class="note__heading">{data.note.title}</h2>
	<DetailNote {...data.note}/>
</section>