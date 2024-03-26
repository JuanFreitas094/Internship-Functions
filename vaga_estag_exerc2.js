function verFibonacci(numero) {
  let a = 0;
  let b = 1;
  let c;

  if (numero === 0 || numero === 1) {
      return true;
  }

  while (true) {
      c = a + b;
      if (c === numero) {
          return true; 
      } else if (c > numero) {
          return false; 
      }
      a = b;
      b = c;
  }
}

let numInf = 29; 
let pertenceFibonacci = verFibonacci(numInf);

if (pertenceFibonacci) {
  console.log(numInf + " pertence à sequência");
} else {
  console.log(numInf + " não pertence à sequência");
}
