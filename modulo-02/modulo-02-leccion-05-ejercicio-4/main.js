/**EJERCICIO 4 -- Scroll es de colores */

'use strict';
const container = document.querySelector('.container');

function handleScroll() {
  console.log('holi');
  if(window.scrollY < 1000) {
    container.classList.remove('pink');
    container.classList.remove('green');
    container.classList.add('blue');
  } else if ((window.scrollY > 1000) && (window.scrollY < 2500)) {
    container.classList.remove('blue');
    container.classList.remove('green');
    container.classList.add('pink');

  } else {
    container.classList.remove('pink');
    container.classList.remove('blue');
    container.classList.add('green');
  }

}
window.addEventListener('scroll', handleScroll);