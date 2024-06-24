const menu = document.querySelector('.header__nav-list--menu');
const menuToggle = document.querySelector('.header__nav-link--burger');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('header__nav-link--burger-open');
  menu.classList.toggle('header__nav-list--menu-open');
  menu.classList.toggle('header__nav-list--menu-closed');
});
