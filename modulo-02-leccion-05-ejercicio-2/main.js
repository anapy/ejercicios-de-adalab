'use strict';

/**EJERCICIO 2 -- ¿Cómo te llamas? */
const button = document.querySelector('.button');

function changeText() {
    let text = document.querySelector('.name');
    const name = document.querySelector('.value');
    console.log(text.value);
}
button.addEventListener('click', changeText);
