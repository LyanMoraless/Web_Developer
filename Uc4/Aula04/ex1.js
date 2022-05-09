//Usando funções 

const prompt = require('prompt-sync')();

function imc(alt, pes) {
    return Math.round(pes / (alt * alt)*1000)/1000
    }
                         //parâmetro
var altura = +prompt('Digite a altura: ')
var peso = +prompt('Digite o peso: ')

    var cal = imc(altura,peso);
    console.log(cal)


