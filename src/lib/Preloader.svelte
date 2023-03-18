<script>
	import { FontsLoader } from 'fonts-loader';

	import { onMount } from 'svelte';
	const randomFacts = [
		'I love South park',
		"I think I hate basketball, 'think'",
		'GGMU',
		"Trap is 'meh'",
		'Eminem is GOATed',
		'Lagos is a mad place',
		'Java is synonymous with hell',
		'Steady grinding',
		'Bulaba',
		'I love historical movies lol',
		'Saving Private Ryan is golden',
		'To the moon!'
	];
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
					document.querySelector('.preloader').style.opacity = '0';
					document.querySelector('.preloader').classList.add('hidden');
				}, 1000);
			}
		}, 50);
	});
</script>

<div
	class="preloader bg-black h-screen w-screen flex justify-center items-center flex-col fixed z-[999] text-white "
>
	<div class="preloader-numbers morgenwalsh text-5xl">0%</div>
	<div class="preloader-fact capitalize">
		{randomFacts[Math.floor(Math.random() * randomFacts.length)]}
	</div>
</div>
