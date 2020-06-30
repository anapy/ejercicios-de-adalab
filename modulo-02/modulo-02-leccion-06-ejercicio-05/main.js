'use strict';

/**EJERCICIO 5 -- Investigando los elementos */
const text = document.querySelector('.text');

function handlerChangeText() {
    console.dir(text);
}

document.addEventListener('keyup', handlerChangeText);
