'use strict';
//EJERCICIO 1 -- aumentar la cuenta cada 2 seg//
let counter = 0;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};
setInterval(incrementAndShowCounter, 2000);