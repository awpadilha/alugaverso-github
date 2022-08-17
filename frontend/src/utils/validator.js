// CPF de exemplo: 744.837.206-86

function isRepeatedNumber(cpf) {
    const firstNumber = cpf[0];
    let differentNumbers = false;
    for(let i = 1; i < cpf.length; i++) {
      // eslint-disable-next-line
      if(cpf[i] != firstNumber) {
        differentNumbers = true;
      }
    }
    return differentNumbers;
}

function validateFirstDigit(cpf){
    let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += cpf[i] * (10 - i);
  }
  const resto = (sum * 10) % 11;
  if (resto < 10) {
    // eslint-disable-next-line
    return cpf[9] == resto;
  }
  // eslint-disable-next-line
  return cpf[9] == 0;
}

function validateSecondDigit(cpf){
    let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * (11 - i);
  }
  const resto = (sum * 10) % 11;
  if (resto < 10) {
    // eslint-disable-next-line
    return cpf[10] == resto;
  }
  // eslint-disable-next-line
  return cpf[10] == 0;
}

export function isCpf(cpf){
    cpf  = cpf.replace(/\.|-/g,"") // para tirar os pontos e hífen caso haja
    // eslint-disable-next-line
    if (cpf.length != 11) {
        return false;
    }

    if(!isRepeatedNumber(cpf)) {
        return false;
    }

    if (!validateFirstDigit(cpf)) {
        return false;
    }

    if (!validateSecondDigit(cpf)) {
        return false;
    }
    return true;
}
