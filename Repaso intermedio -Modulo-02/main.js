'use strict';
const btn = document.querySelector('.js-update');
const  face = document.querySelector('.js-face');
const  select = document.querySelector('.js-select-face');
const container = document.querySelector('.js-container');

function handleUpdateClick(ev){
  // face
  let selectValue = select.value;
  face.innerHTML = selectValue;

  //background
  const randomNumber = parseInt(Math.random() * 100);
  container.classList.remove('correct-yellow-color');
  container.classList.remove('chilean-fire-color');
  if(randomNumber % 2 === 0) {
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.add('chilean-fire-color');
  }
}