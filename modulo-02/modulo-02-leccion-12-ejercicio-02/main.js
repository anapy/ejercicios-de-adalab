'use strict';
const buttons = document.querySelectorAll('.select');
const images = document.querySelector('.js_photo_container');
const photosMadrid = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPe1p34ce60tcr6iOKfPhFOgj9tD-cOez-oQ&usqp=CAU',
  'https://www.hosteleriamadrid.com/wp-content/uploads/2020/03/cuatrotorres-2.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQneSr7AoLX_DScjcemwudZlH9UpRZ4yxkpvQ&usqp=CAU'
]
const photosParis = [
  'https://static1lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/Francia_Paris_shutterstock_122085496_Luciano%20Mortula_Shutterstock.jpg?itok=qBupjemQ',
  'https://www.metropoliabierta.com/uploads/s1/69/40/11/paris-guerra-airbnb_5_570x340.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa9yXT5-PffEDgUwpZYz8M3CuNW7KKnl9WtQ&usqp=CAU'
]
const photosNY = [
  'https://www.civitatis.com/blog/archivos/Estatua-de-la-Libertad.jpg',
  'https://www.hola.com/imagenes//viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg?filter=w400&filter=ds75',
  'https://media.iatiseguros.com/wp-content/uploads/2019/09/04011953/mejor-seguro-viaje-nueva-york-4.jpg'
]

//Gestiona el botón que se pulsa y pasa la información
function clickHandler(ev) {
  cleanIMG();
  console.log(ev.currentTarget.value);
  let city = '';
  city = ev.currentTarget.value;
  if(city === 'Madrid') {
    city = photosMadrid;
  } else if (city === 'Paris') {
    city = photosParis;
  } else {
    city = photosNY;
  }
  createElements(city);
}

//Crea los elementos con sus atributos comunes
function createElements(place){
  for(let i = 0; i < 3; i++) {
    let item = document.createElement('IMG');
    item.setAttribute("src", place[i]);
    item.setAttribute("width", "250");
    item.setAttribute("height", "200");
    item.classList.add('image');
    images.appendChild(item);
  }
}

//Borra las fotos anteriores y deja la página limpia
function cleanIMG() {
  const photos = document.querySelectorAll('.image');
  for(const child of photos) {
    images.removeChild(child);
  }
}

//Recoge los tres botones cuando se da click a cualquiera de ellos
for(let i = 0; i < 3; i++) {
  buttons[i].addEventListener('click', clickHandler);
}



