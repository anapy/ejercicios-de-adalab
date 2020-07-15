'use strict';
//Create class Square with side inside class
class Square {
  sideLength = 9;

  perimeter() {
    const perimeter = 4 * square.sideLength;
    console.log(`El perímetro del cuadrado es de ${perimeter}`);
  }
  area() {
    const area = square.sideLength * square.sideLength;
    console.log(`El área del cuadrado es de ${area}`);
  }
}

const square = new Square();
square.perimeter();
square.area();

//Create class Square with atribute side outside class
class Square2 {
  perimeter(side) {
    const perimeter = 4 * side;
    console.log(`El perímetro del cuadrado es de ${perimeter}`);
  }
  area(side) {
    const area = side * side;
    console.log(`El área del cuadrado es de ${area}`);
  }
}

const square2 = new Square2();
square2.perimeter(9);
square2.area(9);