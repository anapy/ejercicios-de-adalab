'use strict';
//Create class Square with atribute side outside class
class Square {
  perimeter(side) {
    const perimeter = 4 * side;
    console.log(`El perímetro del cuadrado es de ${perimeter}`);
  }
  area(side) {
    const area = side * side;
    console.log(`El área del cuadrado es de ${area}`);
  }
}

const square = new Square2();
square.perimeter(9);
square.area(9);

