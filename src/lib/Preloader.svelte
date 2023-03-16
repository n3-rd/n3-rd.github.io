<script>
	import { FontsLoader } from 'fonts-loader';

	import { onMount } from 'svelte';
	onMount(() => {
		const fontsLoader = new FontsLoader([
			{
				name: 'Morgenwalsh',
				source: '/fonts/Morgenwalsh.otf'
			},
			{
				name: 'Grotta-Medium',
				source: '/fonts/Grotta-Medium.otf'
			}
		]).then((e) => {
			console.log('fonts loaded');
		});

		// count from 0 to 100
		let count = 0;
		const interval = setInterval(() => {
			count++;
			document.querySelector('.preloader-numbers').innerHTML = count + '%';
			if (count === 100) {
				clearInterval(interval);
				setTimeout(() => {
					document.querySelector('.preloader').classList.add('hidden');
				}, 1000);
			}
		}, 50);
	});
</script>

<div
	class="preloader bg-black h-screen w-screen flex justify-center items-center fixed z-[999] text-white"
>
	<div class="preloader-numbers morgenwalsh text-5xl">0%</div>
</div>
