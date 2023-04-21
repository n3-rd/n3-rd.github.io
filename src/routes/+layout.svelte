<script>
	import '../app.scss';
	import Header from '../lib/Header.svelte';
	import Noise from '../lib/Noise.svelte';
	import Preloader from '../lib/Preloader.svelte';
	import { Cursor } from 'curseur';
</script>

<Cursor color="green" mixBlendMode="exclusion" size={13} />
<Noise />
<Preloader />
<Header />
<slot />
