//Ejercicio 4 -- Mi lista de tareas//
'use strict';
let tasksHtml = document.querySelector('.tasks-lists');
let taskHtml = document.querySelectorAll('.tasks');

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

function printTasks() {
  for(const task of tasks) {
    if(task.completed === true) {
      tasksHtml.innerHTML = tasksHtml.innerHTML + `<li class="tasks done"> <input${task.name}</li>`;

    } else {
      tasksHtml.innerHTML = tasksHtml.innerHTML + `<li class="tasks" >${task.name}</li>`;

    }
  }
}

console.log(countTasks(tasks));
printTasks();

