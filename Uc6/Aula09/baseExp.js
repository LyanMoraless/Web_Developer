const prompt = require('prompt-sync')();

let base = prompt('Digite o valor da base: ');
let exp = prompt('Digite o valor do expoente: ');

let calc = base ** exp;

console.log(calc);