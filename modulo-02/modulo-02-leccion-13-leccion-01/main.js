'use strict';

//EJERCICIO 01 -- Inflar las notas //
const marks = [5, 4, 6, 7, 9];
const newMarks = marks.map(mark => mark + 1);
console.log(newMarks);


//EJERCICIO 02 -- Saludar es de buena educación //
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const hi = 'Bienvenida ';
const greetings = names.map(name => 'Bienvenida ' + name); 
console.log(greetings);


//EJERCICIO 03 -- Gracias por confiar en nosotros//
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];
const premiumGreet = users.map(user => generatePremiumGreet(user));
console.log(premiumGreet);
//Revisa si la usuaria es premium o no y devuelve el saludo en concordancia
function generatePremiumGreet(person) {
  let newGreet;
  if(person.isPremium) {
    newGreet = `Bienvenida ${person.name}. Gracias por confiar en nosotros.`
  } else {
    newGreet = 'Bienvenida ' + person.name;
  }
  return newGreet;
}

//EJERCICIO 04 -- Solo los premium//
const premiumUsers = users.filter(user => user.isPremium === true);
console.log(premiumUsers);

//EJERCICIO 05 -- Los pares pueden entrar//
const pins = [2389, 2384, 2837, 5232, 8998];
const allowUsers = pins.filter(pin => pin % 2 === 0);
console.log(allowUsers);