const kiwiPrice = 5;
const kiwiquantity = 2;
const pearsPrice = 2;
const pearquantity = 3;
const grapesPrice = 4;
const grapequantity = 0.5;


const result = document.querySelector('.result');
const totalResult = (kiwiPrice * kiwiquantity)  + (pearsPrice * pearquantity) + (grapesPrice + grapequantity);
result.innerHTML = result.innerHTML + totalResult; 
