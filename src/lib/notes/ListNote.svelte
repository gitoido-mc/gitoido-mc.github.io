<script lang="ts">
    import {resolve} from '$app/paths';
    import {format} from 'date-fns';
    import {Calendar} from '@lucide/svelte';
    import TagList from "$lib/shared/TagList.svelte";

    interface Props {
        title: string,
        slug: string,
        excerpt: string,
        tags: string[],
        date: Date,
    }

    const props: Props = $props();

    const link = resolve('/notes/[slug]', {slug: props.slug});
    const dateString = format(props.date, 'dd.MM.yyyy');
</script>

<style>
    header a {
        text-decoration: none;
    }
    footer .date {

    }
</style>

<article>
    <header><a href={link} class="">{props.title}</a></header>
    <p>{props.excerpt}</p>
    <hr>
    <footer class="row">
        <span class="date col-xs"><Calendar class="calendar-icon"/> <span>{dateString}</span></span>
        <TagList tags={props.tags}/>
    </footer>
</article>