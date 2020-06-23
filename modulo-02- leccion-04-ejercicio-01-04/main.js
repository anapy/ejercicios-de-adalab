/**EJERCICIO 1 -- Función para calcular multiplicaciones */
function multiplication(a, b) {
    return a * b;
}
console.log(`El resultado es ${multiplication(12,3)}`);

/**EJERCICIO 2 -- Función para calcular la media */
function media(a, b, c, d) {
    return ((a + b + c + d) / 4);
}
console.log(`El resultado es ${media(12, 3, 4, 2)}`);


/**EJERCICIO 3 -- Función para calcular un ticket con IVA */
function ticketIVA(price) {
    const IVA = price * 0.21;
    const total = price + IVA;
    return (`Precio sin IVA: ${price}, IVA: ${IVA} y Total: ${total}`);
}
console.log(ticketIVA(10));

/**EJERCICIO 4 -- Función para calcular un ticket con IVA */
function even(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(even(6));
