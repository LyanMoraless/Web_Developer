const prompt = require("prompt-sync")();

var n1 = +prompt("Digite o primeiro número: ");
var n2 = +prompt("Digite o segundo número: ");

 if (n1 == n2){
    console.log("Os números são iguais");
 }
 else{
    console.log("Os números são diferentes");
    
    if (n1 > n2) {
        console.log("n1 é maior", n1, "e", n2);
    }
    else{
        console.log("n2 é maior", n2, "e", n1);
    }
 }