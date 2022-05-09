// 2. Escreva um programa que pergunte quatro números inteiros, referentes a: Opção,
// Num1, Num2 e Num3 respectivamente; e mostre:
//     1. valor de Num1 se a Opção for igual a 1;
//     2. valor de Num2 se a Opção for igual a 2;
//     3. valor de Num3 se a Opção for igual a 3.

//     Os únicos valores aceitos para Opção são 1, 2 ou 3
const prompt = require('prompt-sync')();

var num1 = +prompt('Digite o primeiro número:');

while(num1 == 1) {
   var num2 = +prompt('Digite o segundo número:');

   if (num2 == 2) {
    var num3 = +prompt('Digite o terceiro número:');
   }

   else if(num3 == 3){
    var num4 = +prompt('Digite o quarto número:');
   }
   else{
       console.log('Kbo')
   }
   
}