import './views/videoPlayer';
import './moduls/customGlider';
//import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

// Veriables
const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('#search-bar');

// Menu Button veriables
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const popUpMenu = document.querySelector('.popup-menu');
const subMobileLinkBtn = document.querySelectorAll('.sub-mobile-links');
const subMobileLink = document.querySelectorAll('.sub-mobile-nav');

//Desktop menu
const desktopBtn = document.querySelectorAll('.desktop-links');
const desktopNav = document.querySelectorAll('.desktop-nav');

//Hero video
const heroVideo = document.querySelector('#hero-video');
const videoHeader = document.querySelector('.video-header__background');

searchBtn.addEventListener('click', e => {
  event.preventDefault();
  searchBar.classList.toggle('epand-view');
  searchBtn.classList.toggle('epand-view');
});

menuBtn.addEventListener('click', () => {
  popUpMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  popUpMenu.classList.remove('show-menu');
  subMobileLink.forEach(link => {
    link.classList.remove('show-mobile-links');
  });
});

subMobileLinkBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    subMobileLink[index].classList.toggle('show-mobile-links');
  });
});

// Desktop

desktopBtn.forEach((btn, index) => {
  btn.addEventListener('mouseover', e => {
    desktopNav[index].classList.add('show-mobile-links');
    desktopNav[index].addEventListener('mouseover', () => {
      desktopNav[index].classList.add('show-mobile-links');
    });
  });
});

desktopBtn.forEach((btn, index) => {
  btn.addEventListener('mouseout', e => {
    desktopNav[index].classList.remove('show-mobile-links');
    desktopNav[index].addEventListener('mouseout', () => {
      desktopNav[index].classList.remove('show-mobile-links');
    });
  });
});
