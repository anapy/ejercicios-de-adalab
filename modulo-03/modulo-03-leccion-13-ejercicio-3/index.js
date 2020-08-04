function paddingLeft(inicial, size, padding) {
  if(inicial.length < size) {
    let missingCaracters = size - inicial.length;
    for(let i = 0; i < missingCaracters; i ++) {
      inicial = inicial + padding;
    }
  }
  return inicial;
}
module.exports = paddingLeft;
