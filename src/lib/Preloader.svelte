<script>
    import {fade} from "svelte/transition";

/**
 * preloader element
 * 
 * type: {boolean}
 */
let preloader = true;

/**
 * preload value, preloader value will be equal to this value
 * 
 * type: {number}
 */
let count = 0;
let interval = setInterval(() => {
    count++;
   
    if (count === 100) {
        clearInterval(interval);
        setTimeout(() => {
            preloader = false;
        }, 3000);
       

    }
}, 20);
  
</script>
{#if preloader}
<div class="preloader w-screen h-screen bg-white flex items-center fixed"
transition:fade
>
    <div class="preloader-mask h-full z-[30] bg-white fixed mix-blend-difference"
        style="width: {count}%;"
    ></div>
    <div class="preloader-counter text-black text-[16vw]">{count}%</div>
</div>
{/if}