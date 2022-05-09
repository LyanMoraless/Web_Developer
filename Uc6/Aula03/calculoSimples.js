//Código da peça - Número da peça - Valor unitário 

let code1 = 27052005 ;
let qntd1 = 10;
let vlr1 = 5.65467;


let code2 = 07052005;
let qntd2 = 11;
let vlr2 = 10.827654;

let soma = (vlr1 * qntd1) + (vlr2 * qntd2);

console.log('');

console.log(code1, qntd1, vlr1);
console.log(code2, qntd2, vlr2);

console.log('');

console.log('O valor a ser pago é R$:', soma.toFixed(2));
