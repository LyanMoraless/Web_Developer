
//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

const prompt = require ('prompt-sync')();

var pesoSaco;
var qtRacaoGato; 
var restoRacao;

var consumo5ds;
var sobraApos5ds;

console.log('Cálculo da ração');

//Entrada

pesoSaco = prompt("Informe o peso da ração (Kg's): ");
qtRacaoGato = prompt("Informe a quantidade de ração consumida por dia (g's): ");

//Processamento

consumo5ds = qtRacaoGato * 2 * 5; //quantidade em gramas
sobraApos5ds = (pesoSaco * 1000) - consumo5ds;

//Saída

console.log('Após cinco dias sobrará:', sobraApos5ds,' gramas ou', sobraApos5ds/1000, 'kgs');
