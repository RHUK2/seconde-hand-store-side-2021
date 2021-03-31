const slide = document.getElementById('jsSlide');
const slideImages = document.querySelectorAll('.slide__image');
const arrowLeft = document.getElementById('jsArrowLeft');
const arrowRight = document.getElementById('jsArrowRight');

let imgIdx = 0;

const hideSlideImage = () => {
  slideImages[imgIdx].classList.remove('show-image');
};

const showSlideImage = () => {
  slideImages[imgIdx].classList.add('show-image');
};

const previousSlide = () => {
  hideSlideImage();
  imgIdx--;
  if (imgIdx < 0) imgIdx = 3;
  showSlideImage();
};

const nextSlide = () => {
  hideSlideImage();
  imgIdx++;
  if (imgIdx > 3) imgIdx = 0;
  showSlideImage();
};

const init = () => {
  arrowLeft.addEventListener('click', previousSlide);
  arrowRight.addEventListener('click', nextSlide);
  showSlideImage();
};

if (slide) {
  init();
}
