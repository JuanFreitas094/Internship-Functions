function inverterString(str) {
  let invertedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedStr += str[i];
  }
  return invertedStr;
}

let string = "Eu amo comida árabe, porém prefiro churrasco";
let stringInvertida = inverterString(string);
console.log(stringInvertida); 
