
//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

const prompt = require ('prompt-sync')();

var cotDolar;
var cotReal;

var calcDolReal;

console.log('Cálculo monetário');

//Entrada

cotDolar = prompt("Informe a cotação do dólar U$: ");
cotReal = prompt("Informe a quantidade em reais R$: ");

//Processamento

calcDolReal = cotReal / cotDolar; 

//Saída

console.log("O valor convertido de", cotReal,"reais é de", calcDolReal.toFixed(2),"dólares"); 
//to.fixed é para que os valores quebrados fiquem em apenas dois decimais
