<script>
	import Header from '../lib/Header.svelte';
	import Preloader from '../lib/Preloader.svelte';
	import Swiper from '../lib/Swiper.svelte';
	export const prerender = true;
</script>

<div class="bg-black select-none">
	<Preloader />
	<Swiper />
</div>
