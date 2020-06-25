/**EJERCICIO 5 -- Jugando con el teclado */

'use strict';

const body = document.querySelector('.body');
/**EJERCICIO 4 -- Scroll es de colores */

'use strict';
const text = document.querySelector('.text');

function handleKeydown() {
  let newText = event.key;
  text.innerHTML = `${text.innerHTML + newText}`;
}

document.addEventListener('keydown', handleKeydown);