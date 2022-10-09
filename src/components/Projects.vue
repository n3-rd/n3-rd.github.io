<template>
    <div class="pt-20">
        <div class="text-[3rem] font-serif text-black dark:text-white uppercase">
            Featured Work
        </div>
        <div class="absolute z-20 hidden project-image select-none pointer-events-none">
                <div class="main-image-container h-[25rem] w-[20rem] rellax -rotate-12">
                    <div class="main-image__inner project-image__inner w-full h-full bg-[url(/img/me.jpg)] bg-center bg-cover"></div>
                    </div>
                    </div>
        <div v-for="project in projects" :key="project.name" data-lg-hover>
        <div class="project py-4 border-b-2 border-b-black dark:border-b-white uppercase text-[9rem] font-serif text-black dark:text-white
        hover:text-[#282828] dark:hover:text-white transition-all duration-300 ease-in-out
        flex justify-between items-center cursor-pointer
        "
        :data-project-image="[project.image]"
        >
          <div>{{project.name}}</div>
          <div class="project-desc font-sans text-[1rem] w-4rem">
            {{project.desc}}
          </div>

        </div>
        </div>

        <div class="text-[5rem] font-serif text-black dark:text-white uppercase"
        data-lg-hover
        >
            More +
        </div>

        <div class="h-screen flex justify-center items-center">
            <div class="dark:block hidden"
                data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['0deg', '360deg']}"
                >
                <svg width="70" height="70" viewBox="0 0 256 256"><path fill="#ffffff" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>

                </div>

                <div class="block dark:hidden"
                data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['0deg', '360deg']}"
                >
                <svg width="70" height="70" viewBox="0 0 256 256"><path fill="#282828" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>

                </div>

                <div class="dark:block hidden"
                data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['360deg', '0deg']}"
                >
                <svg width="70" height="70" viewBox="0 0 256 256"><path fill="#ffffff" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>

                </div>

                <div class="block dark:hidden"
                data-lg-scroll
            data-lg-scroll-animate="{'rotate': ['360deg', '0deg']}"
                >
                <svg width="70" height="70" viewBox="0 0 256 256"><path fill="#282828" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>

                </div>
        </div>
    </div>
</template>

<script>
    const showProjectImage = () => {
        const project = document.querySelectorAll('.project');
        const projectImage = document.querySelector('.project-image');
        const projectImageInner = document.querySelector('.project-image__inner');
        project.forEach((project) => {

        project.addEventListener('mouseenter', (e) => {
            const image = e.target.dataset.projectImage;
            projectImageInner.style.backgroundImage = `url(${image})`;
            projectImage.classList.remove('hidden');

            // make the image follow the cursor and still stay in the center of the screen
            const cursor = document.querySelector('.lg-cursor-pointer');
            console.log(cursor);
            const cursorX = cursor.getBoundingClientRect().x;
            const cursorY = cursor.getBoundingClientRect().y;
            const cursorWidth = cursor.getBoundingClientRect().width;
            const cursorHeight = cursor.getBoundingClientRect().height;
            const cursorCenterX = cursorX + cursorWidth / 2;
            const cursorCenterY = cursorY + cursorHeight / 2;
            const imageWidth = projectImage.getBoundingClientRect().width;
            const imageHeight = projectImage.getBoundingClientRect().height;
            const imageCenterX = cursorCenterX - imageWidth / 2;
            const imageCenterY = cursorCenterY - imageHeight / 2;
            projectImageInner.style.transform = `translate(${imageCenterX}px, ${imageCenterY}px)`;
        });

        // listen for mousemove event
        project.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector('.lg-cursor-pointer');

            const cursorX = cursor.getBoundingClientRect().x;
            const cursorY = cursor.getBoundingClientRect().y;
            const cursorWidth = cursor.getBoundingClientRect().width;
            const cursorHeight = cursor.getBoundingClientRect().height;
            const cursorCenterX = cursorX + cursorWidth / 2;
            const cursorCenterY = cursorY + cursorHeight / 2;
            const imageWidth = projectImage.getBoundingClientRect().width;
            const imageHeight = projectImage.getBoundingClientRect().height;
            const imageCenterX = cursorCenterX - imageWidth / 2;
            const imageCenterY = cursorCenterY - imageHeight / 2;
            projectImageInner.style.transform = `translate(${imageCenterX}px, ${imageCenterY}px)`;
        });
        })

    }



    export default {
        name: "Projects",
        data(){
            return {
                projects: [
                    {name: 'Amelia', desc: 'Photography website', image: '/img/1.jpg'},
                    {name: 'Lvly Studio', desc: 'Design Studio Agency', image: '/img/2.jpg'},
                    {name: 'Yemisi', desc: 'Design Studio Agency', image: '/img/3.jpg'},
                    {name: 'Ajoke', desc: 'Name explanation', image: '/img/4.jpg'},
                ]
            }
        },
        mounted(){
            showProjectImage()
        }
    }
</script>
<style>
    .project-image{
        transition: all 0.3s linear;
    }
    .project-image__inner{
        transition: all 0.3s linear;
    }
</style>