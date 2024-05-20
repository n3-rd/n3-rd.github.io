<script lang="ts">
	import { mainAnimation } from '$lib/animations';
	import { Asterisk, Mouse } from 'lucide-svelte';
	import { scroll, animate, timeline, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'.hero-text div',
			{
				y: [100, 0],
				skewY: [40, 0]
			},

			{
				delay: stagger(0.1),
				duration: 1
			}
		);

		animate(
			'.mouse',
			{
				y: [0, 10, 0, -10]
			},
			{
				duration: 1,
				repeat: Infinity,
				direction: 'alternate'
			}
		);

		scroll(
			animate('.hero-text', {
				opacity: [1, 0],
				duration: 2
			})
		);

		scroll(
			animate('.asterik', {
				scale: [1, 700],
				rotate: [0, 360],
				duration: 2
			})
		);
	});
</script>

<div
	class="hero relative z-20 flex h-[333vh] min-w-full items-center justify-center bg-[#10100e] text-[#ffffe3]"
>
	<div class="fixed inset-0 flex flex-col items-center justify-center gap-6 text-2xl">
		<div class="hero-text flex h-fit w-64 justify-between overflow-hidden">
			<div>Godwin</div>
			<div>Jemegah</div>
		</div>
		<div class="asterik z-10 h-6 w-6 origin-[50%_50%] transform text-[4vw] font-black">
			<Asterisk class="z-10" />
		</div>
		<div class="hero-text flex h-fit w-64 justify-between overflow-hidden">
			<div>Portfolio</div>
			<div>2024</div>
		</div>

		<div class=" absolute bottom-5 right-5 flex items-center gap-2">
			<div>scroll</div>
			<Mouse class="mouse h-6 w-6" />
		</div>
	</div>
</div>
