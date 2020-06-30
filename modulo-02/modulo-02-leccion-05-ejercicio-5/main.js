/**EJERCICIO 5 -- Jugando con el teclado */

'use strict';

const body = document.querySelector('.body');

function handleKeydown() {
  console.log(event.key);
  if(event.key === "r") {
    body.classList.add('red');
    body.classList.remove('purple');

  } else if (event.key === "m") {
    body.classList.remove('red');
    body.classList.add('purple');
  } else {
    body.classList.remove('red');
    body.classList.remove('purple');
  }
}

document.addEventListener('keydown', handleKeydown);