import './views/testView';
// import './moduls/customGlider';
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

// subMobileLinkBtn.addEventListener('click', () => {
//   subMobileLink.classList.toggle('show-mobile-links');
//   console.log('Hello World');
// });

// let video = false;

// subMobileLinkBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     subMobileLink[index].classList.toggle('show-mobile-links');
//   });
// });

// videoHeader.addEventListener('mouseover', () => {
//   if (!video) {
//     heroVideo.play();
//   }
// });
// videoHeader.addEventListener('mouseout', () => {
//   if (video) {
//     heroVideo.pause();
//   }
// });
