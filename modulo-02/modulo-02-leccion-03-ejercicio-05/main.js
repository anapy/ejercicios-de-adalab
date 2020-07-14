'use strict';
const title = document.querySelector('.js-title');
const text = document.querySelector('.js-text');
const notification = document.querySelector('.js-notification');


if(notification.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
} else if(notification.classList.contains('error')){
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
} else if(notification.classList.contains('success')){
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';
}
 

