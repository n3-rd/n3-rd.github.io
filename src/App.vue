<script>
import { RouterLink, RouterView } from "vue-router";
import Lenis from "@studio-freight/lenis";

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

export default {
  name: "App",
  components: { CustomCursor },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>

<template>
  <CustomCursor />
  <RouterView />
</template>
