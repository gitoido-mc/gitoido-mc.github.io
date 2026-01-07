<script lang="ts">
    import {resolve} from '$app/paths';

    interface Props {
        title: string,
        slug: string,
        excerpt: string,
        tags: string[],
        date: string,
    }

    const props: Props = $props();

    const link = resolve('/notes/[slug]', {slug: props.slug});
</script>

<article>
    <header><a href={link}>{props.title}</a></header>
    <p>{props.excerpt}</p>
    <hr>
    {props.tags.join(' ')}
    <footer>{props.date}</footer>
</article>