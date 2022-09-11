<template>
   <div class="work-section py-40" id="projects">
      <h2 class="text-5xl md:text-8xl font-display text-center my-28">My <br>Work</h2>

      <div class="projects uppercase">

        <div v-for="project in projects" :key="project.name">
            <a :href="project.link" target="_blank"
          class="block project marquee text-4xl sm:small-gap lg:large-gap lg:text-9xl font-display py-14 list-none main-word">
          <div class="marquee__content">
            <li>{{project.name}}</li>
            <li>{{project.name}}</li>
            <li>{{project.name}}</li>
          </div>

          <div class="marquee__content" aria-hidden="true">
            <li>{{project.name}}</li>
            <li>{{project.name}}</li>
            <li>{{project.name}}</li>
          </div>

          <img :src="project.image" class="main-hovered-image w-[26%] absolute z-10 hidden" alt="" />
        </a>
        </div>


        </div>

    </div>
</template>

<script>
 import { initMainInteractions } from '../assets/main-interactions';
    export default {
        data() {
            return {
                projects: [
                    {
                        name: 'Feliciã',
                        image: '/img.png',
                        link: 'https://n3rd-felicia.netlify.app/'
                    },
                    {
                        "name": "Yemisi",
"image": "https://i.ibb.co/K6ndWLd/Screenshot-from-2022-09-04-23-12-52.png",
                        link: 'https://yemisi.netlify.app/'
                    },
                    {
                        "name": "MONROE RENÉ",
"image": "/project-images/monroe-rene.png",
                        link: 'https://n3rd-modella.netlify.app/'
                    },
                    {
                        "name": "Ajoke",
"image": "https://i.ibb.co/fDsrTbp/Screenshot-from-2022-09-11-16-49-37.png",
                        link: 'https://n3rd-ajoke.netlify.app/'
                    },
                    {
                        "name": "Black & Bold",
"image": "https://i.ibb.co/t3N9vwn/Screenshot-from-2022-09-11-16-52-45.png",
                        link: 'https://n3rd-blacknbold.netlify.app/'
                    },


                ]
            }
        },
        mounted() {
            initMainInteractions();
        }
    }

</script>
