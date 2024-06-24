const arrowLeft = document.querySelector('.slider__button--prev');
const arrowRight = document.querySelector('.slider__button--next');
const paginationButtons = document.querySelectorAll('.slider__pagination-button');
const sliderCards = document.querySelectorAll('.slider__slide-card');
const slidesCount = sliderCards.length;
let currentIndex = 0;


const switchSlide = (button, index) => {
  paginationButtons[currentIndex].classList.remove('slider__pagination-button--current');
  sliderCards[currentIndex].classList.remove('slider__slide-card--current');

  button.classList.add('slider__pagination-button--current');
  sliderCards[index].classList.add('slider__slide-card--current');
  currentIndex = index;
};

const onArrowLeftClick = () => {
  const previousIndex = currentIndex === 0 ? 0 : currentIndex - 1;
  switchSlide(paginationButtons[previousIndex], previousIndex);
};

const onArrowRightClick = () => {
  const nextIndex = currentIndex === slidesCount - 1 ? slidesCount - 1 : currentIndex + 1;
  switchSlide(paginationButtons[nextIndex], nextIndex);
};

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => switchSlide(button, index));
});

arrowLeft.addEventListener('click', onArrowLeftClick);
arrowRight.addEventListener('click', onArrowRightClick);
