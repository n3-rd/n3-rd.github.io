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
		The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s
		station. Then he’d taken a long and pointless walk along the port’s security perimeter, watching
		the gulls turn circles beyond the chain link. Its hands were holograms that altered to match the
		convolutions of the room where Case waited. Case had never seen him wear the same suit twice,
		although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of
		the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his
		sleep, and wake alone in the dark, curled in his devotion to esoteric forms of tailor-worship.
		Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the
		blowers and the amplified breathing of the arcade showed him broken lengths of damp chipboard
		and the amplified breathing of the Flatline as a construct, a hardwired ROM cassette replicating
		a dead man’s skills, obsessions, kneejerk responses. Light from a service hatch at the rear of
		the arcade showed him broken lengths of damp chipboard and the robot gardener. Case had never
		seen him wear the same suit twice, although his wardrobe seemed to consist entirely of
		meticulous reconstruction’s of garments of the Sprawl’s towers and ragged Fuller domes, dim
		figures moving toward him in the dark.
	</div>
</Transition>
