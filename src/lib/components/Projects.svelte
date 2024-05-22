<script lang="ts">
	import { MoveUpRight } from 'lucide-svelte';
	import { animate, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	export let projects = [
		{
			name: 'Ohun',
			description: `
			Get synchronized song lyrics and sing along with your favorite songs. Built with Tauri and Sveltekit.
			There are very few sing along lyrics providers for Linux out there, Ohun attempts to solve this problem by providing a very lightweight and easy to use app.
			`,
			tech: ['SvelteKit', 'Rust', 'TailwindCSS', 'Playerctl'],
			links: {
				website: 'https://github.com/n3-rd/ohun/'
			},
			image: '/img/ohun.gif'
		},
		{
			name: 'AltError',
			description: 'My personal blog, mostly based on sveltekit',
			tech: ['SvelteKit', 'SanityCMS', 'TailwindCSS'],
			links: {
				website: 'https://www.alternateerror.me/'
			},
			image: '/img/aerror.png'
		},
		{
			name: 'Curseur',
			description: 'A simple Svelte component for creating customizable cursors.',
			tech: ['SvelteKit', 'Supabase', 'TailwindCSS'],
			links: {
				website: 'https://github.com/n3-rd/curseur'
			},
			image: '/img/curseur.gif'
		},
		{
			name: 'Inspolist',
			description: 'Get inspired by a sizable collection of websites and add your own!',
			tech: ['Vuejs', 'Supabase', 'TailwindCSS', 'Mongodb'],
			links: {
				website: 'https://inspolist.netlify.app/'
			},
			image: '/img/inspolist.png'
		},
		{
			name: 'Yemisi',
			description: 'Model landing page',
			tech: ['Vuejs', 'GSAP', 'TailwindCSS'],
			links: {
				website: 'https://yemisi.netlify.app/'
			},
			image: '/img/yemisi.png'
		},
		{
			name: 'Playlist 2023',
			description: 'Spotify playlist catalogue',
			tech: ['Svelte', 'SpotifyAPI', 'TailwindCSS'],
			links: {
				website: 'https://playlist-2023.vercel.app/'
			},
			image: '/img/playlist-2023.png'
		},
		{
			name: 'Afrobeats',
			description: 'Afrobeats showcase website',
			tech: ['Vuejs', 'TailwindCSS'],
			links: {
				website: 'https://n3rd-afrobeats.netlify.app/p'
			},
			image: '/img/afrobeats.png'
		}
	];

	let preview = {
		image: '',
		description: '',
		tech: []
	};

	const showPreview = (image: string, description: string, tech: string[]) => {
		preview.image = image;
		preview.description = description;
		preview.tech = tech;
	};

	const animateLinkHover = (el) => {
		animate(el, {
			y: [0, -84]
		});
	};

	const reverseLinkHover = (el) => {
		animate(el, {
			y: [-84, 0]
		});
	};

	onMount(() => {
		showPreview(projects[0].image, projects[0].description, projects[0].tech);

		inView('.projects', () => {
			animate(
				'.name',
				{
					y: [120, 0],
					skewY: [10, 0]
				},
				{
					delay: stagger(0.1)
				}
			);
		});
	});
</script>

<div class="hidden h-full flex-col justify-center gap-3 px-4 lg:flex lg:w-2/5">
	{#if preview.image}
		<img src={preview.image} alt="preview" class="image h-[27rem] min-w-full" />
	{:else}
		<div class="image !h-[27rem] w-full bg-black object-cover object-center"></div>
	{/if}

	<div
		class="info h-44 text-2xl
    font-bold
    "
	>
		{preview.description}
	</div>

	<div
		class="tech
        h-20
    "
	>
		<!-- <div class="font-bold">made with:</div> -->
		{#each preview.tech as tech}
			<div class="tech-item text-xl font-semibold">{tech}</div>
		{/each}
	</div>
</div>
<div class="projects h-full w-full lg:w-3/5">
	{#each projects as project}
		<div class="h-[5.4rem] overflow-hidden">
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a
				href={project.links.website}
				target="_blank"
				class="project flex h-fit cursor-pointer justify-between overflow-hidden border-t-2 border-[#10100e] px-4 py-2 text-5xl font-bold uppercase transition-colors hover:bg-[#10100e] hover:text-[#ffffe3] lg:text-7xl"
				on:mouseover={() => showPreview(project.image, project.description, project.tech)}
				on:mouseenter={() =>
					animateLinkHover(`#project-${project.name.toLowerCase().split(' ').join('-')}`)}
				on:mouseleave={() =>
					reverseLinkHover(`#project-${project.name.toLowerCase().split(' ').join('-')}`)}
			>
				<div
					class="flex flex-col gap-9 lg:gap-3"
					id={`project-${project.name.toLowerCase().split(' ').join('-')}`}
				>
					<div class="name">
						{project.name}
					</div>
					<div class="name">
						{project.name}
					</div>
				</div>

				<!-- <div class="link">
					<MoveUpRight size="30" />
				</div> -->
			</a>
		</div>
	{/each}
</div>
