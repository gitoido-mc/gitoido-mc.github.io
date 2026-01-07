<script lang="ts">
	import { resolve } from '$app/paths';
	import { format } from 'date-fns';
	import { Pen } from '@lucide/svelte';
	import '@picocss/pico/css/pico.jade.css';
	import 'flexboxgrid/dist/flexboxgrid.css';
	import Seo from 'sk-seo';

	let { children } = $props();

	const mainPage = resolve('/');
	const notes = resolve('/notes');
	const year = format(new Date(), 'yyyy');
</script>

<style>
    #branding {
        --pico-font-size: 1rem;
        --pico-line-height: 1;
        --pico-typography-spacing-top: 0;
        --pico-font-weight: 400;
        display: inline-block;
        margin: calc(var(--pico-nav-link-spacing-vertical) * -1) calc(var(--pico-nav-link-spacing-horizontal) * -1);
        padding: var(--pico-nav-link-spacing-vertical) var(--pico-nav-link-spacing-horizontal);
    }

    a.logo {
        text-decoration: none;
    }

    header nav {
        border-bottom: 1px solid var(--pico-muted-border-color);
    }

    footer {
        text-align: center;
    }

    .about h3 {
        --pico-font-size: 1.2rem;
    }

    @supports (font-variant-emoji: emoji) {
        footer .emoji {
            font-variant-emoji: emoji;
        }
    }

    @supports not (font-variant-emoji: emoji) {
        footer .emoji {
            font-variant-emoji: text;
        }
    }
</style>

<Seo />

<header class="container-fluid">
	<section>
		<nav>
			<ul>
				<li><a class="logo contrast" href={mainPage}><h1 id="branding">Gito's modding ponders</h1></a></li>
			</ul>
			<ul>
				<li>
					<a href={notes} class="secondary">
						<Pen />&nbsp;Notes
					</a>
				</li>
			</ul>
		</nav>
	</section>
</header>
<main class="container">
	{@render children()}
	<hr>
	<section>
		<div class="row">
			<div class="col-xs">
				<article class="about space">
					<h3>About space</h3>
					<hr>
					<p>
						Welcome! This space is mostly about minecraft modding. Short tidbits, ruminations, use-cases and examples.
					</p>
					<p><em>Well, mostly about Cobblemon, but still. Hope you like it here, wanderer.</em></p>
				</article>
			</div>
			<div class="col-xs">
				<article class="about author">
					<h3>About author</h3>
					<hr>
					<p>Call me a retired(?) software developer, but really, I'm Gito - a lifelong tinkerer with code.</p>
					<p>I've worked across the full stack with an assortment of languages, but Java and Kotlin have my current attention.</p>
					<p>When I need a break from the screen, I'm usually jamming on my guitar, deep in a computer game, or streaming things on my Twitch channel.</p>
				</article>
			</div>
		</div>
	</section>
</main>
<footer class="container-fluid">
	Built with <span class="emoji">❤</span> using <a href="https://svelte.dev">Svelte</a>.
	Base style provided by <a href="https://picocss.com/">Pico <span class="emoji">✨</span></a>.
	<br>
	&gtreqless; {year}
</footer>