const prompt = require('prompt-sync')();

let valor = +prompt("Digite o valor da conta: ");
let dias = +prompt("Digite a quantos dias a conta está atrasada: ");

let jurosDia = 0.033;
let jurosMes = 100;

if(dias < 30) {
    let calcJuros1 = (valor / jurosDia) * dias;
    console.log(calcJuros1);
}
else {
    let calcJuros2 = (valor / jurosMes) * dias;
    console.log(calcJuros2);
};
