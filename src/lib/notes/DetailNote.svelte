<script lang="ts">

	import TagListComponent from '$lib/shared/TagListComponent.svelte';
	import DateComponent from '$lib/shared/DateComponent.svelte';
	import { format } from 'date-fns';

	interface Props {
		html: string,
		tags: string[],
		date: Date
	}

	const props: Props = $props();
	const dateString = format(props.date, 'dd.MM.yyyy');
</script>

<article>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html props.html}
	<hr>
	<div class="row">
		<DateComponent date={dateString} />
		<TagListComponent tags={props.tags} />
	</div>
</article>