
//Entradas
/**
 * 1 Inicializar o npm no diretorio 
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */
 

//Saída 
console.log("Saida");

//Permite que o usuário teste o comando no terminal do visual code
const prompt = require('prompt-sync')();

//Entradas
do{

//Estética e funcionalidade

    console.log('##################');
    console.log('Digite os valores:');
    console.log('');

//Variáveis da conta

var comp = prompt("Digite o comprimento da sala: "); 
var larg = prompt("Digite a largura da sala: ");
var h = prompt("Dgite a altura da sala: ");
} while(Number(comp) == 0 || Number(larg) == 0 || Number(h) == 0);

//Conta em si

var area = Number(comp) * Number(h)
var volume = Number(comp) * Number(larg) * Number(h)

//Estética e funcionalidade para a exibição do resultado

console.log("A área é: ", area);
console.log("O volume é: ", volume); 



















