'use strict';
/**EJERCICIO 3 -- Dame ipsum */

const text = document.querySelector('.paragraph');

function handleMouseOver() {
  console.log('holi');
  text.innerHTML = text.innerHTML + `  <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nesciunt nihil mollitia atque odit illum dolor sed itaque quibusdam est eligendi,
   laborum debitis pariatur animi sint accusantium veniam illo et.</p>`;
}
text.addEventListener('mouseover', handleMouseOver);