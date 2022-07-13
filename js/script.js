// For navbar

const burger = document.querySelector('.navbar__burger');
const overlay = document.querySelector('.navbar__overlay')
const navlist = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar__logo');

burger.addEventListener('click', (e) => {
  burger.classList.toggle('navbar__burger--active');
  overlay.classList.toggle('navbar__overlay--active');
  document.body.classList.toggle('no-scroll');
  navlist.classList.toggle('navbar__list--active');
});

// implementing navbar hiding on scroll down
let lastScrollTop;
window.addEventListener('scroll', function(){
  let scrollTop = window.pageYOffset ||
  this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top = '-10rem';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// Add event listener for logo
logo.addEventListener('click', function(e){
  document.location.href = "/";
})