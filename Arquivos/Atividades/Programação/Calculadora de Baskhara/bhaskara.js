//const prompt = require('prompt-sync')();

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));

var delt = (b * b) - (4 * a * c);
//console.log(delt)
var x = Math.sqrt(delt)
//console.log(x)

 if(delt < 0) {
     console.log('O delta consta com um valor negativo, logo sendo irreal');
 }
 else{
    let x = -(b) + Math.sqrt(delt) / 2 * a;
    let x2 = -(b) - Math.sqrt(delt) / 2 * a;

    //console.log(`O valor da primeira raiz é igual a ${x} e  o segundo valor da raíz é igual a ${x2}`);
 }

 var bi1 = Math.sqrt(x).toFixed(2);
 var bi2 = Math.sqrt(x2).toFixed(2);

    //console.log(`O valor das raízes biquadradas são equivalentes a ${-bi1}, ${bi1}, ${-bi2}, ${bi2}`)