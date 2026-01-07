<script lang="ts">
    import type {PageProps} from './$types';
    import ListNote from "$lib/notes/ListNote.svelte";

    let {data}: PageProps = $props();
</script>

<svelte:head>
    <title>Notes - Gito's modding ponders</title>
</svelte:head>

{#each data.notes as note (note.slug)}
    <ListNote {...note}/>
{/each}