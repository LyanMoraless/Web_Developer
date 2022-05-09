// 5. Escreva um programa que solicite duas datas pelo teclado e imprima primeiro a menor data seguida da maior data
const prompt = require('prompt-sync')();


var ano1 = +prompt("Digite o primeiro ano: ")
var mes1 = +prompt("Digite o primeiro mes: ")
var dia1 = +prompt("Digite o primeiro dia: ")

//---------------------------------------- //

var ano2 = +prompt("Digite o segundo ano: ")
var mes2 = +prompt("Digite o segundo mes: ")
var dia2 = +prompt("Digite o segundo dia: ")

if(ano1 > ano2){
    console.log('Primeira data é maior')
}
else if(ano2 > ano1){
    console.log('Segunda data é maior')
}
else{
    if(mes1 > mes2){
        console.log('Primeira data é maior')
    }
    else if(mes2 > mes1){
        console.log('Segunda data é maior')
    }
    else{
        if(dia1 > dia2){
            console.log('Primeira data é maior')
        }
        else if(dia2 > dia1){
            console.log('Segunda data é maior')
        }
        else{
            console.log('As datas são iguais')
        }
    }
}