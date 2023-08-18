const menuTL = gsap.timeline({ paused: true });
const loadTL = gsap.timeline();
const photos = document.querySelectorAll('.photos-wrap > img');
let checkMenu = false;

loadTL.from('.hero__title',
            { opacity: 0, y: 200, duration: 1, ease: "rough" })
  .from('.hero__btn',
            { opacity: 0, y: 200, duration: 1, ease: "rough" }, '-=1')
  .from('.hero__descr',
            { opacity: 0, duration: 0.7 }, '-=0.3')
  .from(photos[0], { opacity: 0, duration: 0.5 }, '-=0.7')
  .from(photos[1], { opacity: 0, duration: 0.5 }, '-=0.5')
  .from(photos[2], { opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.photos__author', { opacity: 0, duration: 0.5 }, '-=0.3');

menuTL.from('.menu', { opacity: 0, delay: 0.5, y: 50, duration: 0.3, ease: "rough" })
  .from('.menu__top', { opacity: 0, y: -50, duration: 0.5, ease: "rough" }, '-=0.4')
  .from('.menu__nav', { opacity: 0, y: 200, duration: 0.5, ease: "rough" }, '-=0.3')
  .from('.social', { opacity: 0, y: 200, duration: 0.5, ease: "rough" }, '-=0.3')
  .from('.menu__right', { opacity: 0, y: 200, duration: 0.5, ease: "rough" }, '-=0.4');

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.menu').style.display = 'block';
  menuTL.play();
});

document.querySelector('.close').addEventListener('click', () => {
  menuTL.reverse().then(() => { document.querySelector('.menu').style.display = 'none' });
});


