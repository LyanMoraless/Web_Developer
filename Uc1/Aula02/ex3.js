//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

 const prompt = require ('prompt-sync')();

 var numero;

 var antecessor; 
 var sucessor;

 console.log('Cálculo dos antecessores e sucessores');

 //Entrada

 numero = prompt("Infome o seu número inteiro: ");

 //Processamento

 antecessor = numero - 1;
 sucessor = +numero + 1; 

 //Saída
 
 console.log("O antecessor de", numero, "é:", antecessor, "e o sucessor é:", sucessor);
