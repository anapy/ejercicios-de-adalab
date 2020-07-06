'use strict';

//EJERCICIO 1 -- 1, 2, 3, lo hacemos otra vez

//Creamos el array con los números
const number = [1, 2, 3];

//Indicamos la etiqueta de la lista
const list = document.querySelector('.list');
console.log(list);


//Se hace un bucle for para recorrer los elementos del array e ir 
//incluyéndolos uno a uno en el listado
for(let  i = 0; i < number.length; i++) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(number[i]);
  newItem.appendChild(newContent);
  console.log(newItem);
  //añade al HTML lo que se ha ido creando en el JS
  list.appendChild(newItem);
}

