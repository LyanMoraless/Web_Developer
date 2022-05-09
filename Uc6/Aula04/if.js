const prompt = require('prompt-sync')();

let a = prompt('Digite o valor A: ');
let b = prompt('Digite o valor B: ');
let c = prompt('Digite o valor C: '); 

if (parseInt(a || b || c)) {
    if (a > b && a > c) {
        console.log (a, 'é o maior');
    } 
        else if (b > c && b > a) {
            console.log(b, 'é maior');
        }
        else if (c > a && c > b) {
            console.log(c, 'é maior');
        }
}
    else{
        console.log('Você não tem a capacidade de escrever três números')
    };




