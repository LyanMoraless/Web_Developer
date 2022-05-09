const prompt = require('prompt-sync')();

var opcao = +prompt('Escolha a opção 1, 2, 3 ou 4: ');
var num1 = ('1');
var num2 = ('2');
var num3 = ('3');
var num4 = ('4');

if (opcao == 1){
    console.log(num1)
}
else if (opcao == 2){
    console.log(num2)
}
else if(opcao == 3){
    console.log(num3)
}
else if(opcao == 4){
    console.log(num4)
}
else {
    console.log('O número não foi reconhecido')
}