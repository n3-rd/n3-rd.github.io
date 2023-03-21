<script>
	import Transition from '../../lib/Transition.svelte';
	import { onMount } from 'svelte';
	const playSound = () => {
		var audio = new Audio('/sound/click.mp3');
		audio.volume = 0.3;
		audio.play();
	};

	onMount(() => {
		const contactLink = document.querySelectorAll('.link');
		contactLink.forEach((e) => {
			e.addEventListener('mouseenter', () => {
				playSound();
			});
		});
	});
</script>

<Transition>
	<div class="h-screen w-screen flex justify-center items-center">
		<div class="contact-links morgenwalsh text-[5rem] text-[#b3b3b3]">
			<a
				href="/"
				target="_blank"
				rel="noreferrer"
				class="block link cursor-pointer hover:text-white">Email</a
			>
			<a
				href="https://github.com/n3-rd"
				target="_blank"
				rel="noreferrer"
				class="block link cursor-pointer hover:text-white">Github</a
			>
			<a
				href="/"
				target="_blank"
				rel="noreferrer"
				class="block link cursor-pointer hover:text-white">LinkedIn</a
			>
			<a
				href="https://twitter.com/web_n3rd"
				target="_blank"
				rel="noreferrer"
				class="block link cursor-pointer hover:text-white">Twitter</a
			>
		</div>
	</div>
</Transition>
