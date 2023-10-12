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

<div class="w-screen h-screen flex flex-col justify-center gap-14 px-12">
	<div class="greet text-[8vw] font-bold">
		<div class="hero-line h-fit overflow-hidden"><div class="hero-line-inner">~/ $ echo</div></div>
		<div class="hero-line h-fit overflow-hidden">
			<div class="hero-line-inner">Web Developer.</div>
		</div>
	</div>
	<div class="cta w-full flex items-center">
		<div class="projects-button w-1/2">
			<a
				href="/#work"
				class="px-12 py-4 border-2 border-[#313131] text-3xl rounded-full hover:bg-white hover:text-black transition-all duration-300"
				style="font-variation-settings: 'wght' {wght}, 'ital' {ital};"
				on:mouseenter={() => increaseWght(800, 12)}
				on:mouseleave={() => increaseWght(400, 0)}>Work</a
			>
		</div>
		<div class="about w-1/2">
			Web developer currently based in Lagos with an eye for cool design and a passion for creating
			beautiful, functional and sometimes unconventional websites.
		</div>
	</div>
</div>
