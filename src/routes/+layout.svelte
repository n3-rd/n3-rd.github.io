<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from 'lenis';
	import PrimaryTags from '$lib/head/PrimaryTags.svelte';
	import IconsManifest from '$lib/head/IconsManifest.svelte';
	import GSiteverification from '$lib/head/GSiteverification.svelte';
	import { imagesLoaded, loadAllImages } from '$lib/loadImages';
	import Preloader from '$lib/components/Preloader.svelte';

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		loadAllImages();
	});
</script>

<svelte:head>
	<IconsManifest />
	<GSiteverification />

	<PrimaryTags />
</svelte:head>

{#if $imagesLoaded}
	<slot></slot>
{:else}
	<Preloader />
{/if}

<style></style>
