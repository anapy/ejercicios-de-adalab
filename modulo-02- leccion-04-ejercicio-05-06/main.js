/**EJERCICIO 5 -- Función para el selector */
function getEl(selector) {
    return document.querySelector(selector);
}
console.log(getEl('.tag4'));

/**EJERCICIO 6 -- Logueando errores */
function getElbetter(selector) {
    const element = document.querySelector(selector);
    if(element === null) {
        return (`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    } else {
        return element;
    }
}
console.log(getElbetter('.tagjhk'));
