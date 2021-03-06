function writeThis(word, times){
  for(let i = 0; i < times; i++) {
    console.log(word);
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//this way we are calling getRandomNumber() inside writeThis, to generate a random number for each word to repeat
writeThis('patata', getRandomNumber(10));
writeThis('aguacate', getRandomNumber(10));
writeThis('Pizza', getRandomNumber(10));

const myWordList = [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

//This fuction iterates the array and log by console variable text the number given in variable total
function writeMyArray(myWordList) {
  for(const word of myWordList) {
    writeThis(word.text, word.total);
  }
}

writeMyArray(myWordList);
