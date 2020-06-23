'use strict';
const dogAge = 5;
const firstYear = 15;
const secondYear = 9;
const thirdyear = 5;

if (dogAge === 1) {
    console.log(`El perro tiene ${firstYear}`);
  } else if (dogAge > 1 && dogAge < 3) {
    console.log(`El perro tiene ${firstYear + secondYear}`);
  } else if (dogAge > 3) {
    debugger
    console.log(`El perro tiene ${firstYear + secondYear + ((dogAge - 2) * thirdyear)}`);
  }
