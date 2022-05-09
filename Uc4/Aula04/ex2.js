// 5. Escreva um programa que solicite duas datas pelo teclado e imprima primeiro a menor data seguida da maior data
const prompt = require('prompt-sync')();

function data(d, m, a){
    return `${d}/${m}/${a}`;
}

console.log('Digite a primeira data: ');

var dia1 = prompt('Dia ');
var mes1 = prompt('Mês ');
var ano1 = prompt('Ano ');

console.log('<--------------->');

var dia2 = prompt('Dia ');
var mes2 = prompt('Mês ');
var ano2 = prompt('Ano ');

console.log('<--------------->');

var result1 = data(dia1, mes1, ano1)
var result2 = data(dia2, mes2, ano2) 

if(ano1 > ano2){
    console.log(result1, result2)
}
else if(ano2 > ano1){
    console.log(result2, result1)
}
else{
    if(mes1 > mes2){
        console.log(result1, result2)
    }
    else if(mes2 > mes1){
        console.log(result2, result1)
    }
    else{
        if(dia1 > dia2){
            console.log(result1, result2)
        }
        else if(dia2 > dia1){
            console.log(result2, result1)
        }
        else{
            console.log('As datas são iguais')
        }
    }
}