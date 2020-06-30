'use strict';

//SELECTORS...
const userName = document.querySelector('.js-user-name');
const userPassword = document.querySelector('.js-user-password');
const error = document.querySelector('.error-wrapper');
const login = document.querySelector('.js-login-button');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
	name: 'front23',
	password: 'bicicleta'
};

//FUNCTIONS
function validateUser() {
	console.log('funcion');
	if(userName.value === userInfo.name && userPassword.value === userInfo.password) {
		alert('Estás dentro');
	} else {
		error.classList.toggle('hidden');
		attemps = attemps + 1;
		console.log(attemps);
		block();
	}
}
//bloquea el login y desabilita el botón
function block() {
	if(attemps >= 3) {
		alert('Estás bloqueado');
		disableLogin();
	}
}

function disableLogin() {
	login.innerHTML = '<button id="login-button" class="login-button js-login-button" type="button" disabled>Entrar</button>';

}

//LISTENERS
login.addEventListener('click', validateUser);