//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

 const prompt = require ('prompt-sync')();

 var raio;
 var volume;

 console.log('Cálculo do volume da esfera');

 //Entrada

 raio = prompt("Informe o valor do raio: ");

 //Processamento

 volume = 4/3 * 3.14 * (raio * raio * raio);

 //Saída

 console.log("O volume do raio", raio, "é", volume.toFixed(2));