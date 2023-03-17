<script>
	import Header from '../lib/Header.svelte';
	import Noise from '../lib/Noise.svelte';
	import Preloader from '../lib/Preloader.svelte';
	import Swiper from '../lib/Swiper.svelte';
	export const prerender = true;
</script>

<div class="bg-black select-none">
	<Noise />
	<Preloader />
	<Swiper />
</div>
