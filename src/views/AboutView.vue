<template>
  <div>
    <ComponentHeader />

    <h1 class="text-5xl md:text-[7rem] font-serif text-center py-11">My Story</h1>
    <div class="px-9 text-base md:text-5xl leading-[27.2px] md:leading-[4rem]">
      <p>
        Hi, I'm Godwin Jemegah, I'm from
        <a href="https://en.wikipedia.org/wiki/Edo_State">Edo State</a> in the South-South
        region of <a href="https://en.wikipedia.org/wiki/Nigeria">Nigeria</a> but was born
        in <a href="https://en.wikipedia.org/wiki/Lagos_State">Lagos State</a> where I
        currently study History at the
        <a href="https://en.wikipedia.org/wiki/University_of_Lagos"
          >University Of Lagos</a
        >
      </p>
      <p>
        I'm a self-taught Frontend Developer and I'm currently learning Backend
        Development. I'm also a
        <a href="https://www.adultswim.com/videos/rick-and-morty">Rick and Morty</a> fan
        and I love to play video games.
      </p>
      <p>
        I love to learn new things and I'm always open to learning new things. I'm also a
        huge fan of historical war movies and love to talk about politics.
      </p>
    </div>
  </div>
</template>

<script>
import luge from "@waaark/luge";
import ComponentHeader from "../components/sub_components/ComponentHeader.vue";

export default {
  name: "AboutView",
  mounted() {
    luge.lifecycle.refresh();
  },
  components: { ComponentHeader },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: underline;
}
</style>
