<script>
	import '../app.scss';
	import Header from '../lib/Header.svelte';
	// src/routes/+layout.js
	export const prerender = true;
</script>

<Header />
<slot />
