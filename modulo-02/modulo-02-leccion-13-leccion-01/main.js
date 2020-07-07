'use strict';

//EJERCICIOS 01 -- Inflar las notas //
const marks = [5, 4, 6, 7, 9];
const newMarks = marks.map(mark => mark + 1);
console.log(newMarks);

//EJERCICIOS 02 -- Saludar es de buena educación //
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const hi = 'Bienvenida ';
const greetings = names.map(name => 'Bienvenida ' + name); 
console.log(greetings);

//EJERCICIOS 03 -- Gracias por confiar en nosotros//
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