'use strict';

const currentYear = 2020;

function newLeapYear() {
  for(let i = 1; i <= 4; i++) {
    const next = currentYear + i;
    if((next) % 4 === 0) {
      console.log(`El próximo año bisisesto es el ${next}`)
    }
  }
}
newLeapYear();