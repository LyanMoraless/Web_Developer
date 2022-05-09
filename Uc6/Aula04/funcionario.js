const prompt = require('prompt-sync')();

console.log('------------------------------------------------------------------------')

let number = prompt('Digite o número do trabalhador: ');
let hrs = prompt('Digite a quantidade de horas trabalhadas: ');

console.log('------------------------------------------------------------------------')

let hrswork = 50;

let func = (hrs * hrswork); 

console.log('');

console.log('O funcionário', number, 'recebe um total de:', func);

console.log('');