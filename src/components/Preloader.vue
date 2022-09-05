<template>
     <div class="preloader prevent h-screen w-screen bg-black flex fixed z-50 justify-center items-center">
      <div class="preloader__inner">
        <span class="loader flex"></span>
      </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
setTimeout(() => {
  const tl = gsap.timeline();
  tl.to('.preloader', {
    duration: 1,
    y: '-100%',
    ease: 'power4.out',
    delay: 1,
    onComplete: () => {
      document.querySelector('.preloader').classList.add('prevent');
    },
  });
}, 2500);
</script>