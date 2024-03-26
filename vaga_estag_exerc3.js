// A)
function proximoNumA(numeroAtual) {
  return numeroAtual + 2;
}

// B)
function proximoNumB(numeroAtual) {
  return numeroAtual * 2;
}

// C)
function proximoNumC(numeroAtual) {
  return Math.pow(Math.sqrt(numeroAtual) + 1, 2);
}

// D)
function proximoNumD(numeroAtual) {
  return Math.pow(Math.sqrt(numeroAtual) + 2, 2);
}

// E)
function proximoNumE(numeroAtual) {
  let penultimo = 0;
  let ultimo = 1;
  let proximo;
  for (let i = 2; ; i++) {
      proximo = penultimo + ultimo;
      if (proximo === numeroAtual) {
          return penultimo + ultimo + proximo;
      }
      penultimo = ultimo;
      ultimo = proximo;
  }
}


console.log("a) Próximo número:", proximoNumA(7));
console.log("b) Próximo número:", proximoNumB(64));
console.log("c) Próximo número:", proximoNumC(36));
console.log("d) Próximo número:", proximoNumD(64));
console.log("e) Próximo número:", proximoNumE(8));
