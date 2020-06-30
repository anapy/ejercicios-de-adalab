'use strict';

const user = "Ana Belen"; 
const greeting = document.querySelector('.greetings');
let answer = "Lo siento pero el usuario que has introducido no está registrado"; 
if (user === "Ana Belen" ||  user === "Marta") {
    answer = `Bienvenida ${user}`;
} else {
    answer  = "Lo siento pero el usuario que has introducido no está registrado";
}


greeting.innerHTML = ${answer};


