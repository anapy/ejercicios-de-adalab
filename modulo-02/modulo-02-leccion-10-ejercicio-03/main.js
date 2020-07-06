'use strict';

const user = document.querySelector('.js-user');
const button = document.querySelector('.js-button');
const result = document.querySelector('.result');

const userInfo = {};

function APIHandler() {
  fetch(`https://api.github.com/users/${user.value}`)
  .then(response => response.json())
  .then(data => { 
    userInfo.name = data.name;
    userInfo.repo = data.public_repos;
    userInfo.img = data.avatar_url;
  })
  printInfo();
}

function printInfo() {
  result.innerHTML = `<p>Nombre ${userInfo.name}</p> 
  <p>Foto  <img src=${userInfo.img}></p>
  <p>Número de repositorios ${userInfo.repo}</p>`
}

button.addEventListener('click', APIHandler);

