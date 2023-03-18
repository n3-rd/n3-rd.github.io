<!-- src/routes/about.svelte -->
<script>
	import Transition from '../../lib/Transition.svelte';
	import smoothScroll from '../../lib/smoothScroll';
	import { onMount } from 'svelte';

	onMount(() => {
		smoothScroll();
	});
</script>

<Transition>
	<div class="w-screen h-[70vh] flex justify-center items-center">
		<div class="my-image w-[20rem] h-[24rem] bg-[url(/img/me.webp)] bg-center bg-cover z-10" />
		<div class="my-name text-[8rem] morgenwalsh absolute z-20">GODWIN</div>
	</div>

	<div class="about px-32">
		<p>
			Hi, I'm Godwin Jemegah, I'm from
			<a href="https://en.wikipedia.org/wiki/Edo_State">Edo State</a> in the South-South region of
			<a href="https://en.wikipedia.org/wiki/Nigeria">Nigeria</a>
			but was born in <a href="https://en.wikipedia.org/wiki/Lagos_State">Lagos State</a> where I
			currently study History at the
			<a href="https://en.wikipedia.org/wiki/University_of_Lagos">University Of Lagos</a>
		</p>
		<p>
			I'm a self-taught Frontend Developer and I'm currently learning Backend Development. I'm also
			a
			<a href="https://www.adultswim.com/videos/rick-and-morty">Rick and Morty</a> fan and I love to
			play video games.
		</p>
		<p>
			I love to learn new things and I'm always open to learning new things. I'm also a huge fan of
			historical war movies and love to talk about politics.
		</p>
	</div>
</Transition>
