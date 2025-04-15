// script.js — untuk navbar hamburger menu
const menu = document.querySelector('#menu');
const navbarNav = document.querySelector('.navbar-nav');

menu.onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar menu untuk menutup navbar
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
