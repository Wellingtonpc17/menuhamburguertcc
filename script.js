if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registrado com sucesso:', reg);
      })
      .catch(err => {
        console.log('Falha no registro do Service Worker:', err);
      });
  });
}

AOS.init();

const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('menu');
const overlay = document.getElementById('overlay');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('open');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

const header = document.querySelector('header');
const main = document.querySelector('main');
const mainTop = main.offsetTop;

function handleScroll() {
  if (window.scrollY >= mainTop) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);