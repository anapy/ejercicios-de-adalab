
/**EJERCICIO 1 -- Bio de Adalabers */
const adalaber = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
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
printinfo(adalaber2);
