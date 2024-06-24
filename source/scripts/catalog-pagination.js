const buttonPre = document.querySelector('.catalog__pagination-button--prev');
const buttonNext = document.querySelector('.catalog__pagination-button--next');
const paginationButtons = document.querySelectorAll('.catalog__pagination-button--num');
const paginationCount = paginationButtons.length;
let currentIndex = 1;

const switchPagination = (button, index) => {
  paginationButtons[currentIndex].classList.remove('catalog__pagination-button--current');
  paginationButtons[currentIndex].removeAttribute('disabled');

  button.classList.add('catalog__pagination-button--current');
  button.setAttribute('disabled', 'true');

  if (index === 0) {
    buttonPre.classList.add('catalog__pagination-button--arrow-hidden');
  } else {
    buttonPre.classList.remove('catalog__pagination-button--arrow-hidden');
  }

  if (index === paginationCount - 1) {
    buttonNext.classList.add('catalog__pagination-button--arrow-hidden');
  } else {
    buttonNext.classList.remove('catalog__pagination-button--arrow-hidden');
  }

  currentIndex = index;
};

const onButtonPreClick = () => {
  const previousIndex = currentIndex === 0 ? 0 : currentIndex - 1;
  switchPagination(paginationButtons[previousIndex], previousIndex);
};

const onButtonNextClick = () => {
  const nextIndex = currentIndex === paginationCount - 1 ? paginationCount - 1 : currentIndex + 1;
  switchPagination(paginationButtons[nextIndex], nextIndex);
};

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => switchPagination(button, index));
});

buttonPre.addEventListener('click', onButtonPreClick);
buttonNext.addEventListener('click', onButtonNextClick);
