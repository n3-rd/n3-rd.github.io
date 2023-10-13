<script>
	import Navbar from '$lib/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from '@studio-freight/lenis';
	import PrimaryTags from '$lib/head/PrimaryTags.svelte';
	import IconsManifest from '$lib/head/IconsManifest.svelte';
	import GSiteverification from '$lib/head/GSiteverification.svelte';

	onMount(() => {
		const lenis = new Lenis();

		/**
		 * @param {number} time
		 */
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<svelte:head>
	<link href="https://api.fontshare.com/v2/css?f[]=panchang@1&display=swap" rel="stylesheet" />
	<IconsManifest />
	<GSiteverification />

	<PrimaryTags />
</svelte:head>

<slot />
<Navbar />
