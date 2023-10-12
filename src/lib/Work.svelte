<script>
	import { onMount } from 'svelte';
	import projects from './projects';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="work">
	<div class="header text-[20vw] font-black">Work.</div>
	<div class="content w-full px-44" id="work">
		{#each projects as project}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="item border-t-2 border-white py-7 flex justify-between gap-10 hover:bg-white hover:text-black px-3 cursor-pointer transition-colors duration-300"
				data-project-image={project.image}
			>
				<div class="item-name flex items-center gap-3">
					<div>{project.title}</div>
					<div><img src="/icons/diagonal-arrow-right-up-outline.svg" alt="diagonal icon" /></div>
				</div>
				<div class="item-desc text-xs">{project.description}</div>
			</a>
		{/each}
	</div>
</div>
