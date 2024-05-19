<script lang="ts">
	import { asterikRotation, asterikScale, asterikScroll } from '$lib/animations';
	import { scroll, animate } from 'motion';

	import { onMount } from 'svelte';

	let scale: number;
	let rotate: number;

	$: {
		scale = asterikScale;
		rotate = asterikRotation;
	}

	onMount(() => {
		scroll(({ y }) => {
			console.log('asterikScale', asterikScale);
			console.log('asterikRotation', asterikRotation);
			scale = asterikScale;
			rotate = asterikRotation;

			asterikScroll(y);
		});
	});
</script>

<div
	class="hero relative flex h-[333vh] min-w-full items-center justify-center bg-[#10100e] text-[#ffffe3]"
>
	<div class="fixed inset-0 flex flex-col items-center justify-center gap-6 text-2xl">
		<div>Godwin Jemegah</div>
		<sub
			class="asterik origin-bottom text-[4vw] font-black"
			style={`transform: scale(${scale}) rotate(${rotate}rad);`}>*</sub
		>
		<div>Portfolio</div>
	</div>
</div>
