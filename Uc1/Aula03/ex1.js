//Entradas
/**
 * 1 Inicializar o npm no diretorio
 * npm init -y
 * 2 Instalar um plugin prompt-sync
 * 3 Rodar o progama
 * node <nome do arquivo js>.js */

 const prompt = require("prompt-sync")();

 console.log("Inscrição")

 var idade;
 var nome;
 var número;
 var endereço;
 var sexo;

//Entradas

 var idade = prompt("Digite sua idade: ");

//Procesamento 

if (Number(idade) >= 18){

    var nome = prompt("Digite seu nome: ");
    var sexo = prompt("Digite seu sexo: ");
    var número = prompt("Digite seu número: ");
    var endereço = prompt("Digite seu endereço: ");

}
//Number(idade) >= 16 retorna true or false 

//Saída

 if (Number(idade) >= 18){
    console.log("Nome:", nome, "Endereço", endereço, "Idade:", idade, "Número:", número, "Sexo:", sexo);
    console.log("Cadastro realizado com sucesso!");
 }
 
 //Operadores lógicos 