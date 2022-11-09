// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let contador = {};
  
  arrayNumber.forEach((count) => {
    contador[count] = (contador[count] || 0) + 1;
  });
  const maxValue = Math.max(...Object.values(contador));

  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || maxValue >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroAjustado;
  let text = arrayNumber.join('');
  if (arrayNumber) {
    let parte1 = text.slice(0, 2);
    let parte2 = text.slice(2, 7);
    let parte3 = text.slice(7, 11);
    numeroAjustado = `(${parte1}) ${parte2}-${parte3}`;
  }
  return numeroAjustado;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  const stringSplit = string.split('');
  let coposAgua = 0;

  for (let index = 0; index < stringSplit.length; index += 1) {
    const stringParseInt = parseInt(stringSplit[index]);

    if (stringParseInt) {
      coposAgua += stringParseInt;
    }
  }
  let copos = 'copo';

  if (coposAgua > 1) {
    copos = 'copos';
  }
  return `${coposAgua} ${copos} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
