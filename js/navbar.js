const navMenu = document.querySelector('.nav-menu');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('show');
  }
});