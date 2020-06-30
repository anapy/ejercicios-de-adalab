'use strict';

/**EJERCICIO 2 -- Repetir bucle */
function repeatLoop() {

  for(let i = 0; i < 10; i++) {
    console.log(`Voy por la vuelta ${i + 1}`);
  }
}
repeatLoop();

/**EJERCICIO 3 -- Sumar 2 en un bucle */
let acc = 0;
function sumTwo() {

  for(let i = 0; i < 10; i++) {
    acc = acc + 2;
  }

  console.log(`El resultado es: ${acc}`);
}
sumTwo();

/**EJERCICIO 4 -- Previsión para ver la Luna del cazador */
let date = 2017;

for(let i = 0; i < 15; i++) {
  date = date + 3;
  console.log(`La próxima luna será el 5 de octubre de ${date}`)
}

/**EJERCICIO 5 -- La media */
let sum = 0;
const numbers = [7, 3, 6, 5, 1];

function media() {
  for(const number of numbers) {
    sum = sum + number;
  }
  console.log(`La media es ${sum/numbers.length}`)
}
media();

