// For navbar

const burger = document.querySelector('.navbar__burger');
const overlay = document.querySelector('.navbar__overlay')
const navlist = document.querySelector('.navbar__list');

burger.addEventListener('click', (e) => {
  burger.classList.toggle('navbar__burger--active');
  overlay.classList.toggle('navbar__overlay--active');
  document.body.classList.toggle('no-scroll');
  navlist.classList.toggle('navbar__list--active');
})