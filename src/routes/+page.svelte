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
	<div class="absolute bottom-3 left-3 text-lg z-50 capitalize">
		<span class="hidden md:inline-block">Drag or </span> swipe
	</div>
	<div class="absolute bottom-3 right-3 text-lg z-50 capitalize">Double click to visit url</div>
</div>
