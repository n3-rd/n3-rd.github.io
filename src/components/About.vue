<template>
  <div class="pt-14">
    <div
      class="px-[1rem] text-[3rem] lg:px-16 md:text-[6rem] font-normal font-serif text-center"
    >
      Web Developer living in the beautifully chaotic city of
      <a href="https://en.wikipedia.org/wiki/Lagos">Lagos</a>, Nigeria
    </div>

    <router-link to="/about">
      <div class="flex justify-center items-center w-screen">
        <div id="circle" class="py-16" data-lg-hover>
          My Story My Story My Story My Story My Story My Story
          <!-- absolute center arrow icon -->
        </div>
        <div class="top-1/2 left-1/2 transform -translate-x-1/2 text-4xl" data-lg-hover>
          <div
            class="dark:block hidden"
            data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['0deg', '360deg']}"
          >
            <svg width="32" height="32" viewBox="0 0 256 256">
              <path
                fill="#ffffff"
                d="m220.2 132.2l-72 72a5.9 5.9 0 0 1-8.4-8.4l61.7-61.8H40a6 6 0 0 1 0-12h161.5l-61.7-61.8a5.9 5.9 0 0 1 8.4-8.4l72 72a5.8 5.8 0 0 1 0 8.4Z"
              />
            </svg>
          </div>
          <div
            class="block dark:hidden"
            data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['0deg', '360deg']}"
          >
            <svg width="32" height="32" viewBox="0 0 256 256">
              <path
                fill="#000000"
                d="m220.2 132.2l-72 72a5.9 5.9 0 0 1-8.4-8.4l61.7-61.8H40a6 6 0 0 1 0-12h161.5l-61.7-61.8a5.9 5.9 0 0 1 8.4-8.4l72 72a5.8 5.8 0 0 1 0 8.4Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import CircleType from "circletype";
import luge from "@waaark/luge";

export default {
  mounted() {
    const circle = document.getElementById("circle");
    const circleType = new CircleType(circle);
    circleType.radius();
    luge.lifecycle.refresh();
  },
};
</script>
<style lang="scss">
#circle {
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
