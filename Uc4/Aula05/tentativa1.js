const prompt = require('prompt-sync')();

// var frutas = ['Banana', 'Maça', 'Jabuticaba'];
// console.log(frutas)

var numbs = [];
var sair = false; 

while(!sair) {
    var n = +prompt('Digite um valor: ');
    numbs.push(n)

    var opcao = prompt('Deseja calcular (S/N): ');
    sair = opcao.toUpperCase() == "S";
}

console.log(numbs);