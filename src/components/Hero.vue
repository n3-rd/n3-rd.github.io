<template>
    <div class="main h-screen bg-black text-white flex justify-center items-center">

<div class="main-text text-6xl md:text-9xl font-display">
  <div class="main-word">
    <div class="line overflow-hidden h-20 md:h-32 magic-hover">
      <div class="line__inner relative z-20 main-text__1">HUMAN,</div>
    </div>
    <img src="/img.png" class="main-hovered-image w-[26%] absolute z-10 hidden" alt="" />
  </div>

  <div class="main-word">
    <div class="line overflow-hidden h-20 md:h-32 magic-hover">
      <div class="line__inner relative z-20 main-text__1">MEET</div>
    </div>
    <img src="/img2.png" class="main-hovered-image w-[26%] absolute z-10 hidden" alt="" />
  </div>

  <div class="main-word">
    <div class="line overflow-hidden h-20 md:h-32 magic-hover">
      <div class="line__inner relative z-20 main-text__1">GODWIN</div>
    </div>
    <img src="/img1.png" class="main-hovered-image w-[26%] absolute z-10 hidden" alt="" />
  </div>
</div>
</div>
</template>

<script>
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { initMainInteractions } from '../assets/main-interactions';
const lineInner = document.querySelectorAll('.line__inner');
const initShowIntro = () => {
const tl = gsap.timeline();
setTimeout(() => {

  tl.from('.line__inner', {
    duration: 3,
    delay: 1,
    y: 250,
    stagger: 0.1,
    skewY: 20,
    ease: 'elastic.out(0.4, 0.3)',
    onComplete: ()=>{
        lineInner.forEach((el) => {
            el.classList.add('block');
        });
    }
  })
}, 3000);
}
export default {
    mounted() {
        Splitting();
        initShowIntro();
        initMainInteractions();
    }
}
</script>