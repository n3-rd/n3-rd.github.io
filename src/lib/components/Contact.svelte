<script lang="ts">
	import { animate, type ElementOrSelector, type ElementOrSelector } from 'motion';
	import { onMount } from 'svelte';

	const contactLinks = [
		{
			name: 'Github',
			link: 'https://github.com/n3-rd/'
		},
		{
			name: 'Twitter',
			link: 'https://x.com/n3_rdd'
		},
		{
			name: 'Email',
			link: 'mailto:godwinjdayo@gmail.com',
			last: true
		}
	];

	const animateLinkHover = (el: ElementOrSelector) => {
		animate(el, {
			y: [0, -50]
		});
	};

	const reverseLinkHover = (el: ElementOrSelector) => {
		animate(el, {
			y: [-50, 0]
		});
	};

	// onMount(() => {

	// });
</script>

<div class="contact relative z-30 my-4 flex h-14 justify-end overflow-hidden text-[#10100e]">
	<div class="flex h-20 gap-3 p-4 text-4xl">
		{#each contactLinks as link}
			<a
				href={link.link}
				class="contact-link flex flex-col gap-4"
				on:mouseenter={() => animateLinkHover(`#link-${link.name.toLowerCase()}`)}
				on:mouseleave={() => reverseLinkHover(`#link-${link.name.toLowerCase()}`)}
				target="_blank"
			>
				<div class="link flex flex-col items-start" id={`link-${link.name.toLowerCase()}`}>
					<span>{link.name}</span>
					<span>{link.name}</span>
				</div>
			</a>
			{#if !link.last}
				<span>/</span>
			{/if}
		{/each}
	</div>
</div>
