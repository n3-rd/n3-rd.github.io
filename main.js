import './style.css';
// import { themeChange } from 'theme-change';
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import Lenis from '@studio-freight/lenis'
import barba from '@barba/core';


// import Handlebars from 'handlebars';

const initPreloader = () => {

  setTimeout(() => {

    tl.to(preloader, {
      duration: 1, opacity: 0, ease: 'power4.out', onComplete: () => {
        preloader.style.display = 'none';

      }
    })
    tl.from('.line__inner', {
      duration: 3,
      display: 'block',
      delay: 1,
      y: 250,
      stagger: 0.1,
      skewY: 20,
      ease: 'elastic.out(0.4, 0.3)',
    })
  }, 3000);
  initMainInteractions();
}


const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical',
  })

  //get scroll value


  function raf() {
    lenis.raf()
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}


initSmoothScroll();
Splitting();
barba.init({
  transitions: [{
    name: 'opacity-transition',
    // hide the preloader when the home page is loaded

    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      console.log('enter');
      let href = data.next.url.path;
      console.log(href);
      if (href == '/') {
        setTimeout(() => {
          console.log('closingg')
          console.log(preloader);
          gsap.to(".preloader", {
            duration: 1, opacity: 0, ease: 'power4.out', display: 'none', onComplete: () => {
              preloader.style.display = 'none';

            }
          })
        }, 3000);

        console.log('home');
        initPreloader();

      }
      return gsap.from(data.next.container, {
        opacity: 0
      });
    },
    afterOnce() {
      console.log('afterOnce');
      initPreloader();
    }
    // prevent the preloader from showing twice


  }],
  prevent: ({ el }) => el.classList && el.classList.contains('prevent'),

});
// themeChange();

const tl = gsap.timeline();
const preloader = document.querySelector('.preloader');

const initMainInteractions = () => {
  const mainWord = document.querySelectorAll('.main-word');
  mainWord.forEach((word) => {
    word.addEventListener("mouseenter", () => {
      let mainWordImage = word.querySelector('img');
      mainWordImage.style.display = 'block';
      // make mainWordImage follow mouse
      word.addEventListener("mousemove", (e) => {
        mainWordImage.style.top = e.pageY + 'px';
        mainWordImage.style.left = e.pageX + 'px';
      })
    })
    word.addEventListener("mouseleave", () => {
      setTimeout(() => {
        let mainWordImage = word.querySelector('img');
        mainWordImage.style.display = 'none';
      }, 200)
    });
  });
}




const initCustomCursor = () => {
  const cursorRounded = document.querySelector('.cursor-rounded');
  const cursorPointed = document.querySelector('.cursor-pointed');



  document.addEventListener('mousemove', (e) => {
    cursorRounded.style.top = e.pageY + 'px';
    cursorRounded.style.left = e.pageX + 'px';
    cursorPointed.style.top = e.pageY + 'px';
    cursorPointed.style.left = e.pageX + 'px';
    // give cursorPointed a stagger
    cursorRounded.style.transition = 'all 0.2s linear';


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

const initMarqueeScroll = () => {
  const marquee = document.querySelector('.marquee__content');
  document.addEventListener('scroll', () => {
    marquee.style.transform = `translateX(-${window.scrollY * 0.5}px)`;
  })
}
// listen for all elements loaded
window.addEventListener('load', () => {
  // check if device is mobile with user agent
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // if (!isMobile) {
  // initCustomCursor();
  // } 
  // const mainWord = document.querySelectorAll('.main-word');
  // initProjects();
  initPreloader();

  initMarqueeScroll();
});