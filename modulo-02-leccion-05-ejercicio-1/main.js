'use strict';

/**EJERCICIO 1 -- Hola click */
const button = document.querySelector('.button');

function changeText() {
    const text = document.querySelector('.paragraph');
    text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`; 
}
button.addEventListener('click', changeText);

