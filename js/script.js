/* burger-menu */

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(el => {
  el.addEventListener('click', function () {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

    burger.classList.remove('burger--active');
  })
});


/* search-input */

let searchBtn = document.querySelector('.search-button');
let innerSearchBtn = document.querySelector('.search-form__button--loop');
let search = document.querySelector('.search');
let searchClose = document.querySelector('.search__close');

searchBtn.addEventListener('click', function() {
  search.classList.toggle('search--active');

  innerSearchBtn.classList.toggle('search-button__icon--active');
});

innerSearchBtn.addEventListener('click', () => {
  search.classList.remove('search--active');

  innerSearchBtn.classList.remove('search-button__icon--active');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search--active');

  innerSearchBtn.classList.remove('search-button__icon--active');
});

innerSearchBtn.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');

  burger.classList.remove('burger--active');
})


/* slider */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
})

/* tabs */

document.querySelectorAll('.tabs-nav__btn').forEach( tabsBtn => {
  tabsBtn.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach( btn => {
      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(tabsBtn => {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
})

/* accordion */

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active',
});


