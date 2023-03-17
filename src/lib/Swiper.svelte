<script>
	// core version + navigation, pagination modules:
	import Swiper, { Navigation } from 'swiper';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	let projectTitle = '';
	import { onMount } from 'svelte';

	const swiperItems = [
		{
			id: 1,
			image: '/img/1.jpg',
			title: 'title 1',
			description: 'description 1'
		},
		{
			id: 2,
			image: '/img/1.jpg',
			title: 'title 2',
			description: 'description 2'
		},
		{
			id: 3,
			image: '/img/1.jpg',
			title: 'title 3',
			description: 'description 3'
		},
		{
			id: 4,
			image: '/img/1.jpg',
			title: 'title 4',
			description: 'description 4'
		},
		{
			id: 5,
			image: '/img/1.jpg',
			title: 'title 5',
			description: 'description 5'
		},
		{
			id: 6,
			image: '/img/1.jpg',
			title: 'title 6',
			description: 'description 6'
		},
		{
			id: 7,
			image: '/img/1.jpg',
			title: 'title 7',
			description: 'description 7'
		},
		{
			id: 8,
			image: '/img/1.jpg',
			title: 'title 8',
			description: 'description 8'
		},
		{
			id: 9,
			image: '/img/1.jpg',
			title: 'title 9',
			description: 'description 9'
		}
	];

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

		swiper.on('afterInit', function () {
			makeInactiveSlidesOpaque();
		});
		swiper.on('slideChangeTransitionEnd', function () {
			makeInactiveSlidesOpaque();
			projectTitle = document.querySelector('.swiper-slide-active img').dataset.title;
			console.log(document.querySelector('.swiper-slide-active img').dataset.title);
		});
		swiper.on('slideChange', function () {
			var audio = new Audio('/sound/click.mp3');
			// reduce volume
			audio.volume = 0.3;
			audio.play();
		});
	});
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<!-- put text in middle of screen -->

	<div
		class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex justify-center items-center"
	>
		<div class="Morgenwalsh text-[6rem]">{projectTitle}</div>
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
