<script lang="ts">
	import { resolve } from '$app/paths';
	import { format } from 'date-fns';
	import TagListComponent from '$lib/shared/TagListComponent.svelte';
	import DateComponent from '$lib/shared/DateComponent.svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		title: string,
		slug: string,
		excerpt: string,
		tags: string[],
		date: Date,
		noMargin?: boolean,
		class?: ClassValue
	}

	const props: Props = $props();

	const link = resolve('/notes/[slug]', { slug: props.slug });
	const dateString = format(props.date, 'dd.MM.yyyy');
</script>

<style>
    header a {
        text-decoration: none;
    }

    .no-margin {
        margin: 0;
    }
</style>

<article class={props.class}>
	<header><a href={link} class="">{props.title}</a></header>
	<p>{props.excerpt}</p>
	<hr>
	<div class="row">
		<DateComponent date={dateString} />
		<TagListComponent tags={props.tags} />
	</div>
</article>