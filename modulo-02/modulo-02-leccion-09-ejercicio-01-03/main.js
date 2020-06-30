'use strict';
const arr = [];
let reverseArr = [];


//Ejercicio 1 -- Numeritos//
function get100Number() {
  for(let i = 1; i < 101; i++){
    arr.push(i);
    console.log(i);
  }
  return arr;
}
get100Number();

//Ejercicio 2 -- Sotiremun//
function getReversed100Numbers() {
  reverseArr = get100Number().reverse();
  for(const item of reverseArr) {
    console.log(item);
  }
}
getReversed100Numbers();

//Ejercicio 3 -- The numbers//
const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenNumbers = [];
let multof3Numbers = [];
let result = [];

function bestLostNumber() {
  for(const number of lostNumbers) {
    if(number % 2 === 0) {
      evenNumbers.push(number);
    } else if(number % 3 === 0) {
      multof3Numbers.push(number);
    }
  }
  console.log(evenNumbers);
  console.log(multof3Numbers);
  return result = evenNumbers.concat(multof3Numbers);
}
console.log(bestLostNumber());

//Ejercicio 4 -- Mi lista de tareas//
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false }
];

function countTasks(array) {
  return (`Tienes ${array.length} tareas`);
}



console.log(countTasks(tasks));
