<script lang="ts">
    import {resolve} from "$app/paths";
    import {Pen} from '@lucide/svelte';

    import favicon from '$lib/assets/favicon.svg';
    import '@picocss/pico/css/pico.jade.css';
    import 'flexboxgrid/dist/flexboxgrid.css'

    let {children} = $props();

    const mainPage = resolve('/');
    const notes = resolve('/notes');
</script>

<svelte:head>
    <link rel="icon" href={favicon}/>
</svelte:head>

<header class="container-fluid">
    <nav>
        <ul>
            <li><a class="logo contrast" href={mainPage}>Gito's modding ponders</a></li>
        </ul>
        <ul>
            <li><a href={notes} class="secondary"><Pen/> Notes</a></li>
        </ul>
    </nav>
</header>
<main class="container">
    {@render children()}
</main>
<footer class="container-fluid">

</footer>