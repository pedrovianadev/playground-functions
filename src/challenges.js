// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    return 'os gatos trombam e o rato foge';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayNumbers = [];

  for (let index = 0; index < array.length; index +=1) {
    if (array[index] %  3 === 0 && array[index] % 5 === 0) {
      arrayNumbers.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayNumbers.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayNumbers.push('fizz');
    } else {
      arrayNumbers.push('bug!')
    }
  }
  return arrayNumbers;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
