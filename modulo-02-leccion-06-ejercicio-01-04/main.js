
/**EJERCICIO 1 -- Bio de Adalabers */
const adalaber = {
    name: 'Susana',
    age: 34,
    job: 'periodista',
};

function printinfo(adalaber) {
    console.log(`Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}`);
}

const adalaber1 = adalaber;
printinfo(adalaber1);

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';
adalaber2.showBio = function() { 
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;}
console.log(adalaber2.showBio());

//printinfo(adalaber2);

/**EJERCICIO 2-- A la carrera */

/**Opción normal */
adalaber1.run = function() {
    return ('Estoy corriendo');
};
console.log(adalaber1.run
    ());

/**Opción flecha */
adalaber1.run2 = () => `Estoy corriendo vs flecha`;
console.log(adalaber1.run2());

adalaber1.runAMarathon = distance => `Estoy corriendo ${distance} kilometros`;
console.log(adalaber1.runAMarathon(42));


adalaber1.runAMarathon2 = () => `Estoy corriendo`;

/**EJERCICIO 3-- Bio de Adalabers 2 */
console.log(adalaber2.showBio());

