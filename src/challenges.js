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
function encode(string) {
  let code = string.split('');

  for (let index = 0; index < code.length; index += 1) {
    if (code[index] === 'a') {
      code[index] = '1';
    } else if (code[index] === 'e') {
      code[index] = '2';
    } else if (code[index] === 'i') {
      code[index] = '3';
    } else if (code[index] === 'o') {
      code[index] = '4';
    } else if (code[index] === 'u') {
      code[index] = '5';
    }
  }
  return code.join('');
}
function decode(string) {
  let code = string.split('');

  for (let index = 0; index < code.length; index += 1) {
    if (code[index] === '1') {
      code[index] = 'a';
    } else if (code[index] === '2') {
      code[index] = 'e';
    } else if (code[index] === '3') {
      code[index] = 'i';
    } else if (code[index] === '4') {
      code[index] = 'o';
    } else if (code[index] === '5') {
      code[index] = 'u';
    }
  }
  return code.join('');
}

// Desafio 10
function techList(array, string) {
  let result = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let object = {
      tech: array[index],
      name: string,
    };
    result.push(object);
  }
  return result;
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
