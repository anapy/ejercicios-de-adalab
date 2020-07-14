'use strict';

console.log('hello');
let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}

const avocados2 = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(avocados);
console.log(avocados2);