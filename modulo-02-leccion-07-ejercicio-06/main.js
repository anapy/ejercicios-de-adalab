'use strict';

/**EJERCICIO 6 -- Tenemos mucho en común */
const answer = document.querySelector('.books');
const button = document.querySelector('.submit')
const books = [];

function reply() {
  books.push(answer.value);
  for(const book of books){
    console.log(`¡A mí también me encantó ${book}!`);
  }
}

button.addEventListener('click', reply);