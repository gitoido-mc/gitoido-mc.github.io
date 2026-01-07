<script lang="ts">
    import {Calendar} from '@lucide/svelte';

    interface Props {
        date: string
    }

    const props: Props = $props();
</script>


<span class="date col-xs"><Calendar class="calendar-icon"/> <span>{props.date}</span></span>