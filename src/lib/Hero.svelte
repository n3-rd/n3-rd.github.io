<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let wght = 400;
	let ital = 0;

	const increaseWght = (/** @type {number} */ w, /** @type {number} */ i) => {
		wght = w;
		ital = i;
	};

	onMount(() => {
		gsap.from('.hero-line-inner', {
			duration: 1,
			delay: 1,
			y: 223,
			skewY: 10,
			ease: 'power4.out',
			stagger: 0.1
		});
	});
</script>

<div
	class="w-screen h-[94vh] lg:h-screen flex flex-col justify-center gap-20 lg:gap-4 px-4 lg:px-12"
>
	<div class="greet text-[8vw] sm:text-8xl font-bold">
		<div class="hero-line h-fit overflow-hidden"><div class="hero-line-inner">~/ $ echo</div></div>
		<div class="hero-line h-fit overflow-hidden">
			<div class="hero-line-inner">Web Developer.</div>
		</div>
	</div>
	<div class="cta w-full flex flex-col lg:flex-row items-center">
		<div class="projects-button w-full lg:w-1/2 hidden lg:block">
			<a
				href="/#work"
				class="px-6 lg:px-12 py-3 lg:py-4 border-2 border-[#313131] text-2xl lg:text-3xl rounded-full hover:bg-white hover:text-black transition-all duration-300"
				style="font-variation-settings: 'wght' {wght}, 'ital' {ital};"
				on:mouseenter={() => increaseWght(800, 12)}
				on:mouseleave={() => increaseWght(400, 0)}>Work</a
			>
		</div>
		<div class="about w-full lg:w-1/2 text-center lg:text-left text-lg sm:text-xl">
			Web developer currently based in Lagos with an eye for cool design and a passion for creating
			beautiful, functional and sometimes unconventional websites.
		</div>
	</div>
</div>
