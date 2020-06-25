'use strict';

/**EJERCICIO 2 -- ¿Cómo te llamas? */
const button = document.querySelector('.button');
const name = document.querySelector('.name');
const greet = document.querySelector('.greetings');

function handlerChangeText() {
    console.log(`Hola ${name.value}`);
    greet.innerHTML = (`Hola ${name.value}`);

}
button.addEventListener('click', handlerChangeText);
