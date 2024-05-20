<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from 'lenis';

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<slot></slot>

<style></style>
