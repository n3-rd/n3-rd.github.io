<template>
    <div class="h-[100vh] w-screen flex justify-center items-center">
        <div class="title-text font-display text-[19vw] font-black -tracking-[11.9px] uppercase z-30 dark:mix-blend-exclusion mix-blend-multiply"
        data-lg-scroll
        data-lg-scroll-animate="{'x': ['0%', '100%'], 'font-weight': ['900', '100']}"
        data-splitting
        >
        Godwin</div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="main-image-container h-[25rem] w-[20rem] rellax">
            <div class="main-image__inner w-full h-full bg-[url(/img/me.jpg)] bg-center bg-cover"></div>
          </div>
          </div>
    </div>
</template>

<script>
    import luge from '@waaark/luge'
    import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import {gsap} from 'gsap'
const letterHoverEffect = () => {
    const tl = gsap.timeline();
const titleTextLetter = document.querySelectorAll(".char");
titleTextLetter.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
        tl.to(letter, {
            duration: 0.2,
            fontWeight: 300,
            ease: "linear",
        });
    });
    letter.addEventListener("mouseleave", () => {
        tl.to(letter, {
            duration: 0.2,
            fontWeight: 900,
            ease: "power2.inOut",
        });
    });
});
}

    export default {
        name: "Title",
        data(){
            return {
                textWeight: 900
            }
        },
        destroyed(){
            luge.lifecycle.refresh()
        },
        mounted(){
Splitting();
letterHoverEffect();

            const titleText = document.querySelector('.title-text')

            }
    }

    </script>

<style>
    .title-text{
        font-weight: calc(var(--progress) * 800 + 100);
    }
</style>