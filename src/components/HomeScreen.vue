<template>
  <div class="home-screen h-[100vh]">
    <Header />
    <Title />
    <!-- <MainImage/> -->
    <!-- <CustomCursor/> -->

    <div
      class="absolute bottom-0 left-0 h-16 pl-7 uppercase font-bold"
      data-lg-scroll
      data-lg-scroll-animate="{'opacity': ['1', '0']}"
    >
      Godwin Jemegah
    </div>
    <div
      class="absolute bottom-3 right-0 h-16 pr-7 font-bold tracking-widest flex items-center uppercase"
      data-lg-scroll
      data-lg-scroll-animate="{'opacity': ['1', '0']}"
    >
      <div class="dark:block hidden">
        <svg width="28" height="28" viewBox="0 0 256 256">
          <path
            fill="#ffffff"
            d="m204.2 148.2l-72 72a5.8 5.8 0 0 1-8.4 0l-72-72a5.9 5.9 0 0 1 8.4-8.4l61.8 61.7V40a6 6 0 0 1 12 0v161.5l61.8-61.7a5.9 5.9 0 0 1 8.4 8.4Z"
          />
        </svg>
      </div>
      <div class="block dark:hidden">
        <svg width="28" height="28" viewBox="0 0 256 256">
          <path
            fill="#000000"
            d="m204.2 148.2l-72 72a5.8 5.8 0 0 1-8.4 0l-72-72a5.9 5.9 0 0 1 8.4-8.4l61.8 61.7V40a6 6 0 0 1 12 0v161.5l61.8-61.7a5.9 5.9 0 0 1 8.4 8.4Z"
          />
        </svg>
      </div>

      <div>Scroll</div>
    </div>
  </div>
</template>
<script>
import Title from "./sub_components/Title.vue";
import MainImage from "./sub_components/MainImage.vue";
// import CustomCursor from './sub_components/CustomCursor.vue';
import Header from "./Header.vue";
export default {
  name: "HomeScreen",
  components: {
    Title,
    MainImage,
    // CustomCursor,
    Header,
  },
};
</script>
<style lang="scss">
.home-screen {
  min-height: 100vh;
}
</style>
