// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(girafa, elefante, macaco) {

  if (girafa === true && elefante === true) {
    return true;
  }
  return false;
}
compareTrue(macaco, elefante);
compareTrue(girafa, elefante);



// Desafio 2
function calcArea(base, height) {
  let areaTotal = (base * height) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return ultimoNome + ', ' + primeiroNome;
}

// Desafio 5

function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arrayNumeros) {
  let numeroRepetido = 0;
  let maiorNumero = -15;
  for (let index in arrayNumeros) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index];
    }
  } for (let index2 in arrayNumeros) {
    if (maiorNumero === arrayNumeros[index2]) {
      numeroRepetido += 1;
    }
  } return numeroRepetido;

}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1 === Math.abs(mouse - cat2))) {
    return 'os gatos trombam e o rato foge'
  } else {
    return 'cat2'
  }
}
 

// Desafio 8
function fizzBuzz(array) {
  const numberArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      numberArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      numberArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      numberArray.push('fizz');
    } else {
      numberArray.push('bug!');
    }
  }
return numberArray;
 
}

// Desafio 9
function encode(palavra) {
  const word = palavra.split('');
  for (let index in word) {
    if (word[index] === 'a'){
      word[index] = '1'
    } else if (word[index] === 'e') {
      word[index] = '2'
    } else if (word[index] === 'i') {
      word[index] = '3'
    }else if (word[index] === 'o') {
    word[index] = '4'
    } else if (word[index] === 'u') {
      word[index] = '5'
    }
  } return word.join('');
}

function decode(palavra) {
  const word = palavra.split('');
  for (let index in word) {
    if (word[index] === '1'){
      word[index] = 'a'
    } else if (word[index] === '2') {
      word[index] = 'e'
    } else if (word[index] === '3') {
      word[index] = 'i'
    }else if (word[index] === '4') {
    word[index] = 'o'
    } else if (word[index] === '5') {
      word[index] = 'u'
    }
  } return word.join('');
}


// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  
  const sortArray = array.sort();
  const arrayObject = [];

  for (let index = 0; index < sortArray.length; index += 1) {
    arrayObject.push({
      tech: sortArray[index],
      name: nome,
    });
  }
  return arrayObject;
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
