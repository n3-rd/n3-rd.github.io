<script>
	import projects from './projects';
</script>

<div class="header text-[20vw] font-black">Work.</div>
<div class="content w-full px-44">
	{#each projects as project}
		<div
			class="item border-t-2 border-white py-7 flex justify-between gap-10 hover:bg-white hover:text-black px-3 cursor-pointer transition-colors duration-300"
		>
			<div class="item-name">{project.title}</div>
			<div class="item-desc text-xs">{project.description}</div>
		</div>
	{/each}
</div>
