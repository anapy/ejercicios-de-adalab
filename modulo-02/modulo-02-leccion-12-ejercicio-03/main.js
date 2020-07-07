'use strict';
const selectForm = document.querySelector('.js-select');
let options = [];

const people = [
  {
    name: 'Pepa',
    lastName: 'Perez',
    phone: 999999999
  },
  {
    name: 'María',
    lastName: 'Suarez',
    phone:123232323,
  },
  {
    name: 'Lucía',
    lastName: 'Sánchez',
    phone: 3434324342,
  }
];
function proof() {
  console.log('hola');
}

//Crea las etiquetas option con el valor del nombre de cada una
function createPeople() {
  for(let i = 0; i < 3; i++) {
    let option = document.createElement('option');
    let content = document.createTextNode(people[i].name);
    option.appendChild(content);
    option.value = people[i].name;
    option.classList.add('options');
    console.log(option);
    selectForm.appendChild(option);
    //debugger;
  }
}

function magic(event) {
  options = document.querySelectorAll('.options')
  console.log(event.Target);
  proof();
  for(let i = 0; i < 3; i++) {
  options[i].addEventListener('change', proof);
  }
}
createPeople();
selectForm.addEventListener('change', magic);

// Recoge los tres botones cuando se da click a cualquiera de ellos
// for(let i = 0; i < 3; i++) {
//   options[i].addEventListener('click', createPeople);
// }

