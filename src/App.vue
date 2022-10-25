<script>
import { RouterLink, RouterView } from "vue-router";
import Lenis from "@studio-freight/lenis";
import Noise from "./components/sub_components/Noise.vue";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net/en#easeOutExpo
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

import luge from "@waaark/luge";
import CustomCursor from "./components/sub_components/CustomCursor.vue";
import Preloader from "./components/Preloader.vue";
import { gsap } from "gsap";
import fontfaceobserver from "fontfaceobserver";

const preloadFonts = () => {
  const fonts = [
    new fontfaceobserver("Boska-Regular"),
    new fontfaceobserver("Hind-Regular"),
    new fontfaceobserver("Supreme-Variable"),
  ];

  // check if all fonts are loaded
  Promise.all(fonts.map((font) => font.load())).then(() => {
    setTimeout(() => {
      const tl = gsap.timeline();
      tl.to(".preloader", {
        duration: 2,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
          document.querySelector(".preloader").remove();
        },
      });
    }, 4000);
  });
};

export default {
  name: "App",
  components: { CustomCursor, Preloader, Noise },
  mounted() {
    luge.lifecycle.refresh();
    preloadFonts();
  },
};
</script>

<template>
  <Noise />
  <Preloader class="preloader" />
  <CustomCursor />
  <RouterView />
</template>
