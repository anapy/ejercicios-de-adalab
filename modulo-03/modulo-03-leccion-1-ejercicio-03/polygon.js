class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;    
    this.height = height;
  }
  perimeter() {
    const perimeter = this.numberOfSides * this.base;
    console.log(`El perímetro es de ${perimeter}`);
  }
  area() {
    const area = this.base * this.height;
    console.log(`El área es de ${area}`);
  }
}

//Create class Square with side inside class
class Square extends Polygon{
  constructor(side) {
    super(4, side, side);
  }
}
class Triangle extends Polygon{
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    const area = ((this.base * this.height)/2);
    console.log(`El área es de ${area}`);
  }
}

export default {
  Polygon,
  Square,
  Triangle,
  };