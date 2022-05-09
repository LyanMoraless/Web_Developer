// 1. Escreva um programa que pergunte dois números e 
// indique se são iguais ou diferentes. Caso sejam diferentes, 
// mostre o maior e o menor, nesta ordem.

//npm init -y
//npm install prompt-sync

const prompt = require('prompt-sync')();

var num1 = +prompt('Digite o valor do primeiro número:');
var num2 = +prompt('Digite o valor do segundo número:');

if(num1 == num2){
    console.log('Os números são iguais');
}
else if(num1 > num2){
    console.log('O primeiro número', num1, 'é maior que o segundo', num2);
}
else{
    console.log('O segundo', num2,'é maior que o primeiro', num1);
}