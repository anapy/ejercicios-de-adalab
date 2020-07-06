//Ejercicio 1 -- Número aleatorio parte A
function getNumber() {
  fetch("https://api.rand.fun/number/integer")
    .then(response => response.html())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
    ;
  }

document.querySelector('.js-emoji').addEventListener("click", getNumber);

//Ejercicio 1 -- String con especificaciones parte B
function getString() {
  fetch("https://api.rand.fun/text/password?lenght=20")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result2').innerHTML = data.result
    });
}
document.querySelector('.js-emoji').addEventListener("click", getNumber);
document.querySelector('.js-emoji').addEventListener("click", getString);

