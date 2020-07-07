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