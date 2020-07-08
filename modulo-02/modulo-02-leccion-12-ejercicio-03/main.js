'use strict';
const selectForm = document.querySelector('.js-select');
let options = [];
const formName = document.querySelector('.js-name');
const formLastName = document.querySelector('.js-lastName');
const formPhone = document.querySelector('.js-phone');

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

function handlerClick(event) {
  options = document.querySelectorAll('.options')
  let selectedPerson = event.currentTarget.value;
  let select = controlChange(selectedPerson);
  formName.value = people[select].name;
  formLastName.value = people[select].lastName;
  formPhone.value = people[select].phone;
}

//Devuelve el índice de la persona que corresponde con la elegida
function controlChange(per) {
  let number = 0;
  debugger;
  for(const person of people) {
    if(person.name === per) {
      number = people.indexOf(person);
    }
  }
  return number;
}
createPeople();
selectForm.addEventListener('change', handlerClick);

// Recoge los tres botones cuando se da click a cualquiera de ellos
// for(let i = 0; i < 3; i++) {
//   options[i].addEventListener('click', createPeople);
// }

