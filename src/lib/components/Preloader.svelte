<script>
	import { Asterisk } from 'lucide-svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'.loader-asterisk',

			{
				rotate: [null, 360]
			},
			{
				duration: 3,
				repeat: Infinity,
				easing: 'linear'
			}
		);
	});
</script>

<div
	class="fixed z-[9999] flex h-screen w-screen items-center justify-center bg-[#10100e] text-[#ffffe3]"
>
	<div class="loading-text flex items-center gap-3 text-7xl">
		<div class="loading">Loading</div>
		<div
			class="loader-asterisk z-10 flex h-full origin-[50%_50%] transform items-center text-[4vw] font-black"
		>
			<Asterisk class="z-10" size="60" />
		</div>
	</div>
</div>
