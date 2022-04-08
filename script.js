const navBar = document.querySelector('.navbar');
const barBtn = document.querySelector('#bar-btn');

barBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

const home = document.querySelector('.home');
const box = document.querySelector('.box-container');
const image = document.querySelector('.image');
const content = document.querySelector('.content');
const button = document.querySelector('.button');

const tl = new TimelineMax();

tl.fromTo(image, 1, { height: '0%' }, { height: '100%' })
  .fromTo(image, 1, { width: '0%' }, { width: '100%', ease: Power2.easeIn })
  .fromTo(button, 1, { height: '0%' }, { height: '100%' });
