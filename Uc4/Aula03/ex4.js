// 3. Escreva um programa que leia três valores inteiros diferentes e:
// a) determine e imprima o menor entre eles;
// b) determine e imprima o maior número entre eles.

const prompt = require('prompt-sync')();

var num1 = +prompt('Digite o primeiro valor: ');
var num2 = +prompt('Digite o segundo valor: ');
var num3 = +prompt('Digite o terceiro valor: ');

//20  10  30

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1, num2, num3)
    }
    else {
        console.log(num1, num3, num2)
    }
}

//-------------------------------------

else if (num2 > num3 && num2 > num1) {
    if (num1 > num3) {
        console.log(num2, num1, num3)
    }
    else {
        console.log(num2, num3, num1)
    }
}

// -------------------------------------

else {
    if (num1 > num2) {
        console.log(num3, num1, num2)
    }
    else {
        console.log(num3, num2, num1)
    }
}
// -------------------------------------