<template>
    <div>


        <div
  class="my-element" data-lg-scroll
  data-lg-scroll-animate="{
    'scale': ['1', '1.2', '6'],
    'rotate': ['0deg', '360deg', '6'],
    'backgroundImage': ['url(/img/1.jpg)', 'url(/img/2.jpg)', '6']
}">
  <div class="main-image w-[23rem] h-[26rem]">
            <div class="main-image__inner w-full h-full bg-center bg-cover bg-[url(/img/1.jpg)]"
            data-lg-scroll
  data-lg-scroll-animate="{
    'background-image': ['url(/img/1.jpg)', 'url(/img/2.jpg)', '6']

  }"
            >
            </div>
        </div>
</div>
    </div>
</template>

<script>




    export default {
        name: "MainImage",
        data(){
            return {
                images: [
                    {name: '1', src: '/img/1.jpg'},
                    {name: '1', src: '/img/1.jpg'},
                    {name: '1', src: '/img/1.jpg'},
                ]
            }
        },
        mounted(){

    const myElement = document.querySelector('.my-element')
    luge.scrollobserver.add(myElement)
        }
    }
</script>