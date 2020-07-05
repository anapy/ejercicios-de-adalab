'use strict';

const user = document.querySelector('.js-user');
const button = document.querySelector('.js-button');
const result = document.querySelector('.result');

const userInfo = {};
const repoNames = [];

function APIHandler() {
  fetch(`https://api.github.com/orgs/${user.value}`)
  .then(response => response.json())
  .then(data => { 
    userInfo.name = data.name;
    userInfo.repo = data.public_repos;
    userInfo.img = data.avatar_url;
    userInfo.url = data.repos_url;
    printInfo();
    console.log(userInfo.url);

  reposHandler();
  })
}

function reposHandler() {
  fetch(userInfo.url)
  .then(response => response.json())
  .then( data => {
    for(let i = 0; i < data.length; i++) {
      repoNames.push(data[i].name);
      console.log(data[i].name);
    }
    printInfo();
  })
}

function printInfo() {
  for(let i = 0; i < repoNames.length; i++) {
    repoNames.push(repoNames[i].name);
    result.innerHTML = `<p>${result.innerHTML}</p> <p>${repoNames[i]}</p>`
  }
}

button.addEventListener('click', APIHandler);


