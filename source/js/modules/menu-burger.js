const toggle = document.querySelector('.header__toggle');
const headerWrapper = document.querySelector('.header__wrapper');
const headerLogoWrapper = document.querySelector('.header__logo-wrapper');
const body = document.querySelector('body');
const mainNavList = document.querySelector('.main-nav__list');

const openBurger = function () {
  toggle.addEventListener('click', function () {
    if (toggle.classList.contains('header__toggle--closed')) {
      toggle.classList.remove('header__toggle--closed');
      toggle.classList.add('header__toggle--opened');
      headerWrapper.classList.add('header__wrapper--opened');
      headerLogoWrapper.classList.add('header__logo-wrapper--opened');
      body.classList.add('scroll-lock');
      mainNavList.classList.add('main-nav__list--opened');
    } else {
      toggle.classList.add('header__toggle--closed');
      toggle.classList.remove('header__toggle--opened');
      headerWrapper.classList.remove('header__wrapper--opened');
      headerLogoWrapper.classList.remove('header__logo-wrapper--opened');
      body.classList.remove('scroll-lock');
      mainNavList.classList.remove('main-nav__list--opened');
    }
  });
};

export {openBurger};

