<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import Lenis from '@studio-freight/lenis'


const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical',
  })
  function raf() {
    lenis.raf()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}
initSmoothScroll();
</script>

