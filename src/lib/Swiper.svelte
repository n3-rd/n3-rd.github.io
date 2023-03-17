<script>
	// core version + navigation, pagination modules:
	import Swiper, { Navigation } from 'swiper';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import projects from '../lib/projects.js';
	import { onMount } from 'svelte';

	let projectTitle = '';
	const swiperItems = projects;

	onMount(() => {
		// init Swiper:
		const swiper = new Swiper('.swiper', {
			// configure Swiper to use modules
			modules: [Navigation],
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			slidesPerView: 3,
			spaceBetween: 8,
			centeredSlides: true,
			grabCursor: true,
			loop: true,
			mousewheel: true,
			keyboard: true,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});

		const makeInactiveSlidesOpaque = () => {
			const activeSlide = document.querySelector('.swiper-slide-active');

			const slides = document.querySelectorAll('.swiper-slide');
			slides.forEach((slide) => {
				if (slide !== activeSlide) {
					slide.style.opacity = '0.5';
					slide.style.padding = '-100px';
				} else {
					slide.style.opacity = '1';
				}
			});
		};

		const openUrl = (url) => {
			window.open(url, '_blank');
		};

		swiper.on('click', (e) => {
			console.log(e.clickedSlide.firstChild.dataset.url);
			openUrl(e.clickedSlide.firstChild.dataset.url);
		});

		swiper.on('init', function () {
			makeInactiveSlidesOpaque();
			console.log('swiper initialized');
		});
		// swiper.on("")
		swiper.on('slideChangeTransitionEnd', function () {
			makeInactiveSlidesOpaque();
			projectTitle = document.querySelector('.swiper-slide-active img').dataset.title;
		});
		swiper.on('slideChange', function () {
			var audio = new Audio('/sound/click.mp3');
			// reduce volume
			audio.volume = 0.3;
			audio.play();
		});

		swiper.init();
	});
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<!-- put text in middle of screen -->

	<div
		class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-center "
	>
		<div class="Morgenwalsh text-[6rem] uppercase text-white">{projectTitle}</div>
	</div>

	<!-- Slider main container -->
	<div class="swiper">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			{#each swiperItems as item}
				<div class="swiper-slide">
					<img
						src={item.image}
						alt="item.title"
						class="w-full h-full object-center object-cover"
						data-title={item.title}
						data-url={item.url}
					/>
				</div>
			{/each}
		</div>

		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev" />
		<div class="swiper-button-next" />
	</div>
</div>

<style>
	.swiper {
		width: 80vw;
		height: 80vh;
	}
	.swiper-slide {
		opacity: 0.5;
		width: 25rem;
		transition: opacity 0.5s;
		/* height: 25rem; */
	}
	.swiper-slide-active {
		opacity: 1 !important;
	}
</style>
