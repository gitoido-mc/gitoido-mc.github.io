<script lang="ts">
    import TagComponent from "$lib/shared/TagComponent.svelte";

    interface Props {
        tags: string[]
    }

    const props: Props = $props();
</script>

<style>
    .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: stretch;
    }
</style>

<span class="tags col-xs">
{#each props.tags as tag (tag)}
    <TagComponent {tag}/>
{/each}
</span>