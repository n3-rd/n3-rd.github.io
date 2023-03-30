<script>
	import '../app.scss';
	import Header from '../lib/Header.svelte';
	import Noise from '../lib/Noise.svelte';
	import Preloader from '../lib/Preloader.svelte';
</script>

<Noise />
<Preloader />
<Header />
<slot />
