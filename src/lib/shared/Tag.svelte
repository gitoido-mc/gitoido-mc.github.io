<script lang="ts">
    import {resolve} from "$app/paths";

    interface Props {
        tag: string
    }

    const props: Props = $props();
    const tagLink = resolve("/tags/[slug]", {
        slug: props.tag
    })
</script>

<style>
    a {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin: 0 .2em;
    }
</style>

<a href={tagLink}>#{props.tag}</a>