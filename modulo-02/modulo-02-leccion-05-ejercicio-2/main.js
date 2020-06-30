'use strict';

/**EJERCICIO 2 -- ¿Cómo te llamas? */
const button = document.querySelector('.button');
const name = document.querySelector('.name').value;
const greet = document.querySelector('.greetings');

function handlerChangeText() {
    const name = document.querySelector('.name');
    name.value = name.value;
    console.log(`Hola ${name.value}`);
    greet.innerHTML = (`Hola ${name.value}`);

}
button.addEventListener('click', handlerChangeText);
