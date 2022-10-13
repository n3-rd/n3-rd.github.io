<template>
  <div
    class="w-screen h-screen flex justify-center items-center flex-col z-[999] fixed bg-[#b3b3b3] dark:bg-black"
  >
    <div class="circle-loader-outer text-[1.6rem] md:text-[2rem]">
      Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading
    </div>
    <div class="circle-loader-inner text-[1.3rem] md:text-[1.6rem] absolute opacity-95">
      Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading
    </div>
    <div class="circle-loader-inner-2 text-[0.9rem] md:text-[1.2rem] absolute opacity-80">
      Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import CircleType from "circletype";

export default {
  name: "Preloader",
  mounted() {
    const tl = gsap.timeline();
    const circleOuter = document.querySelector(".circle-loader-outer");
    const circleType = new CircleType(circleOuter);
    circleType.radius(100);

    const circleInner = document.querySelector(".circle-loader-inner");
    const circleType2 = new CircleType(circleInner);
    circleType2.radius(100);

    const circleInner2 = document.querySelector(".circle-loader-inner-2");
    const circleType3 = new CircleType(circleInner2);
    circleType3.radius(100);
  },
};
</script>

<style lang="scss">
.circle-loader-outer {
  animation: rotate 17s linear infinite;
}
.circle-loader-inner {
  animation: rotate-back 17s linear infinite;
}
.circle-loader-inner-2 {
  animation: rotate 17s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate-back {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
