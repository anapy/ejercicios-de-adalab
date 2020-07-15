//Create class Square with side inside class
class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }
  perimeter() {
    const perimeter = 4 * this.sideLength;
    console.log(`El perímetro del cuadrado es de ${perimeter}`);
  }
  area() {
    const area = this.sideLength * this.sideLength;
    console.log(`El área del cuadrado es de ${area}`);
  }
}

const square = new Square(9);
square.perimeter();
square.area();