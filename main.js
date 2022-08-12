import './style.css';
import { themeChange } from 'theme-change';
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();
themeChange();

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

const initPreloader = () => {

  setTimeout(() => {
    
    tl.to(preloader, { duration: 1, opacity: 0, ease: 'power4.out', onComplete: () => {
      preloader.style.display = 'none';
     
    }
     })
     tl.from('.line__inner', {
      duration: 0.5,
      display: 'block',
      delay: 1,
      y: 250,
      stagger: 0.1,
      skewY: 20,
    })
  }, 3000);

}

// listen for all elements loaded
window.addEventListener('load', () => {
  initPreloader();

 
  // const mainWord = document.querySelectorAll('.main-word');

initMainInteractions();
});