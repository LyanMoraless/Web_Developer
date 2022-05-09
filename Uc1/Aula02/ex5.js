//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

 const prompt = require ('prompt-sync')();

 var a;
 var b; 
 var c;

 console.log('Cálculo das inversões');

 //Entrada

 
 a = prompt("Digite um valor para A: ");
 b = prompt("Digite um valor para B: ");

 //Processamento

 c = b; 
 b = a; 
 a = c; 

 //Saída

 console.log("O valor da variável A é:", a, "e o valor da variável B é:", b);
