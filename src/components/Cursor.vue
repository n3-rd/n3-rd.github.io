<template>
    <div>
        <div
      class="cursor-rounded z-50 hidden lg:block w-7 h-7 rounded-full border border-white absolute -translate-y-2 -translate-x-3">
    </div>
    <div class="cursor-pointed z-50 hidden lg:block w-2 h-2 bg-white rounded-full absolute"></div>
    </div>
</template>

<script>

    const initCustomCursor = () => {
  const cursorRounded = document.querySelector('.cursor-rounded');
  const cursorPointed = document.querySelector('.cursor-pointed');



  document.addEventListener('mousemove', (e) => {
    cursorRounded.style.top = e.pageY + 'px';
    cursorRounded.style.left = e.pageX + 'px';
    cursorPointed.style.top = e.pageY + 'px';
    cursorPointed.style.left = e.pageX + 'px';
    // give cursorPointed a stagger
    cursorRounded.style.transition = 'all 0.1s linear';


  })

//  move the cursor on scroll
    window.addEventListener('scroll', (e) => {
        cursorRounded.style.top = e.pageY + 'px';
        cursorRounded.style.left = e.pageX + 'px';
        cursorPointed.style.top = e.pageY + 'px';
        cursorPointed.style.left = e.pageX + 'px';

    })

  const magicHover = document.querySelectorAll('.magic-hover');
  magicHover.forEach((hover) => {
    hover.addEventListener('mouseenter', () => {
      cursorRounded.classList.add('cursor-pointed--active');
      // cursorRounded.classList.add('cursor-rounded--active');
    })
    hover.addEventListener('mouseleave', () => {
      setTimeout(() => {
        cursorRounded.classList.remove('cursor-pointed--active');
        // cursorRounded.classList.remove('cursor-rounded--active');
      }, 1000)
    })
  });

}

export default {
  mounted() {
    initCustomCursor();
  }
}
</script>