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

    export { initMainInteractions };