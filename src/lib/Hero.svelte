<script>
	let wght = 400;
	let ital = 0;

	const increaseWght = (/** @type {number} */ w, /** @type {number} */ i) => {
		wght = w;
		ital = i;
	};
</script>

<div class="w-screen h-screen flex flex-col justify-center gap-14 px-12">
	<div class="greet text-[8vw] font-bold">
		~/ $ echo <br /> Web Developer.
	</div>
	<div class="cta w-full flex items-center">
		<div class="projects-button w-1/2">
			<button
				class="px-12 py-4 border-2 border-[#313131] text-3xl rounded-full hover:bg-white hover:text-black transition-all duration-300"
				style="font-variation-settings: 'wght' {wght}, 'ital' {ital};"
				on:mouseenter={() => increaseWght(800, 12)}
				on:mouseleave={() => increaseWght(400, 0)}>Work</button
			>
		</div>
		<div class="about w-1/2">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto nemo fugit deleniti
			soluta magni nostrum perspiciatis voluptatem eligendi libero eius sit, eveniet explicabo
			assumenda vero recusandae magnam animi sed.
		</div>
	</div>
</div>
