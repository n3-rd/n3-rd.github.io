<template>
  <ComponentHeader />
  <div class="px-11 pt-10">
    <div class="absolute z-20 hidden project-image select-none pointer-events-none">
      <div class="main-image-container h-[25rem] w-[20rem] rellax -rotate-12">
        <div
          class="main-image__inner project-image__inner w-full h-full bg-[url(/img/me.jpg)] bg-center bg-cover"
        ></div>
      </div>
    </div>
    <div v-for="project in projects" :key="project.name" data-lg-hover>
      <a :href="project.link" target="_blank">
        <div
          class="project py-4 border-b-2 border-b-black dark:border-b-white uppercase text-[1.7rem] md:text-[9rem] font-serif text-black dark:text-white hover:text-[#282828] dark:hover:text-white transition-all duration-300 ease-in-out flex justify-between items-center cursor-pointer"
          :data-project-image="[project.image]"
        >
          <div>{{ project.name }}</div>
          <div class="project-desc font-sans text-[0.5rem] w-4rem">
            {{ project.desc }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import luge from "@waaark/luge";
import ComponentHeader from "../components/sub_components/ComponentHeader.vue";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Amelia",
          desc: "Photography website",
          link: "https://n3rd-amelia.netlify.app/",
        },
        {
          name: "Lvly Studio",
          desc: "Design Studio Agency",
          link: "https://lvlystudio.netlify.app/",
        },
        {
          name: "Playlist 2022",
          desc: "Spotify Playlist",
          link: "https://n3rd-playlist-2022.netlify.app/#/playlist",
        },
        {
          name: "Yemisi",
          desc: "Personal Website",
          link: "https://yemisi.netlify.app/",
        },
        {
          name: "Ajoke",
          desc: "Name explanation",
          link: "https://n3rd-ajoke.netlify.app/",
        },
        {
          name: "Utopia",
          desc: "Design Inspiration",
          link: "https://n3rd-utopia.netlify.app/",
        },
        {
          name: "Modella",
          desc: "Design Inspiration",
          link: "https://n3rd-modella.netlify.app/",
        },
        {
          name: "Feliciã",
          desc: "Design Inspiration",
          link: "https://n3rd-felicia.netlify.app/",
        },
        {
          name: "Billboard API",
          desc: "API",
          link: "https://billboard-hot-100-api.onrender.com/charts",
        },
      ],
    };
  },
  mounted() {
    luge.lifecycle.refresh();
  },
  components: { ComponentHeader },
};
</script>
