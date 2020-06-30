'use strict';

/**EJERCICIO 1 -- Hola click */
const button = document.querySelector('.button');

function changeText(param1, ev) {
    console.log('changeText se está ejecutando', param1, ev)
    const text = document.querySelector('.paragraph');
    text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`; 
}

//const changeTextWithParams = changeText.bind(null, '.paragraph');
// changeTextWithParams(123)

button.addEventListener('click', changeText);

