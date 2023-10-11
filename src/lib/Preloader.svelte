<script>

/**
 * type: {number}
 */
let count = 0;
let interval = setInterval(() => {
    count++;
   
    if (count === 100) {
        clearInterval(interval);

    }
}, 20);
  
</script>
<div class="preloader w-screen h-screen bg-white flex items-center">
    <div class="preloader-mask h-full z-[30] bg-white fixed mix-blend-difference"
        style="width: {count}%;"
    ></div>
    <div class="preloader-counter text-black text-[22vw]">{count}%</div>
</div>