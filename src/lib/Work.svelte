<script>
	import { onMount } from 'svelte';
	import projects from './projects';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="work">
	<div class="header text-[20vw] sm:text-6xl md:text-[20vw] font-black">Work.</div>
	<div class="content w-full px-4 md:px-10 lg:px-20" id="work">
		{#each projects as project}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="item border-t-2 border-white py-4 md:py-7 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 hover:bg-white hover:text-black px-3 cursor-pointer transition-colors duration-300"
				data-project-image={project.image}
			>
				<div class="item-name text-center md:text-left flex items-center gap-2">
					<div class="text-xl md:text-2xl">{project.title}</div>
					<div>
						<img
							src="/icons/diagonal-arrow-right-up-outline.svg"
							alt="diagonal icon"
							class="mt-2 md:mt-0"
						/>
					</div>
				</div>
				<div class="item-desc text-xs md:text-sm">{project.description}</div>
			</a>
		{/each}
	</div>
</div>
