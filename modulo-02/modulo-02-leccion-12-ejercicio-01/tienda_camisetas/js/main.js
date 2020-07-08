'use strict';
let products = [];
let cart = [];

//api
const getDataFromApi = () => {
  fetch('../api/data.json')
  .then(response => response.json())
  .then(data => {
    products = data.items;
    console.log(products);
    paintProducts();
  });
};
const cardsElements = document.querySelector('.js-cards');

const paintProducts = () => {
    let codeHTML = '';
    for(let index = 0; index < products.length; index++) {
      codeHTML += `<article class="card">`;
      codeHTML += `<img src="${products[index].imageUrl}" class="card__img" alt="Producto: ${products[index].name}">`;
      codeHTML += `<h3 class="card__title">${products[index].name}</h3>`;
      codeHTML += `<p class="card__description">${products[index].price} €</p>`;
      codeHTML += `<button class="card__btn js-product-inc" 
      id="${products[index].id}"
      data-index="${index}"
      data-index="${products[index].id}"
      >Añadir a la cesta</button>`;
      codeHTML += `</article>`;
    } 
    const cardsElements = document.querySelector('.js-cards');
    cardsElements.innerHTML = codeHTML;
    listenProductsClicks();
};

const listenProductsClicks = () => {
  const productsBtns = document.querySelectorAll('.js-product-inc');
  for(const productBtns of productsBtns) {
    productBtns.addEventListener('click', handlerProductsClick);
  }
  console.log(cardsElements);
}

const handlerProductsClick = ev => {
  const clickedId = parseInt(ev.currentTarget.id);
  const product =  products.find(productItem => productItem.id === clickedId);
  console.log(product);
};

getDataFromApi();
paintProducts();