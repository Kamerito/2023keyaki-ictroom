document.addEventListener("DOMContentLoaded", function() {
    const slideText = document.querySelector(".slide-text");
    setTimeout(function() {
      slideText.style.opacity = "1";
      slideText.style.transform = "translateX(0)";
    }, 1000);
  });

  const frames = document.querySelectorAll('.carousel-frame');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showFrame(index) {
  frames.forEach(frame => frame.style.display = 'none');
  frames[index].style.display = 'block';
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + frames.length) % frames.length;
  showFrame(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % frames.length;
  showFrame(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showFrame(currentIndex);


const scrollToTopButton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});
