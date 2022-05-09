const prompt = require('prompt-sync')();


var frutas = [' -Banana', ' -Maçã', ' -Melão,', ' -Morango', ' -Jaboticaba'];

//Escrevendo quantos itens tem na lista
        //console.log(frutas.length);

//Escrevendo a primeira posição da lista ''0''
        //console.log(frutas[0]);
//Escrevendo o último da lista ''-1''
        //console.log(frutas[frutas.length - 1]);

console.log("★ Listando todos");
console.log('')
for (var i=0; i <= frutas.length-1; i++) {
    console.log(frutas[i]);
}
console.log('')