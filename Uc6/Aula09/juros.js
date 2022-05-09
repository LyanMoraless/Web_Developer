const prompt = require('prompt-sync')();

let capStarter = parseInt(prompt('Preço a ser pago R$: '));
let juros1 = 0.30;
let juros2 = 0.50;
let time = parseInt(prompt('Tempo de atraso em dias: '));

let jurosDia = juros1 * time;
let juros30Dias = jurosDia + capStarter;


let jurosDia2 = juros2 * time;
let juros29Dias = jurosDia2 + capStarter;

    if(time >= 30){
        console.log(juros30Dias); 
    }
    else{
        console.log(juros29Dias);
    };

