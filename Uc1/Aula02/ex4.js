//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

 const prompt = require ('prompt-sync')();

 var ano;
 var anoAtual;
 
 var idade;
 var idadeMes; 
 var idadaSemana;

 console.log('Cálculo da data de vida');

 //Entrada

 ano = prompt("Digite o ano do seu nascimento: ");
 anoAtual = prompt("Digite o ano atual: ");

 console.log("#######################################################")

 //Processamento 

 idade = anoAtual - ano;
 idadeMes = idade * 12; 
 idadaSemana = idadeMes * 4;

 //Saída

 console.log("A sua idade é", idade, "anos", idadeMes, "mêses", idadaSemana, "semanas");