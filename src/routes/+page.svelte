<script>
	import Noise from '../lib/Noise.svelte';
	import Preloader from '../lib/Preloader.svelte';
	import Swiper from '../lib/Swiper.svelte';
	export const prerender = true;
</script>

<div class="bg-black select-none">
	<Noise />
	<Preloader />
	<Swiper />
	<div class="absolute bottom-3 left-3 text-lg z-50">Drag or swipe</div>
	<div class="absolute bottom-3 right-3 text-lg z-50">Double click to visit url</div>
</div>
