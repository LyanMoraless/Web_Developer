const prompt = require('prompt-sync')();

//ParseInt = define que é um number || +prompt('x');

console.log('');
console.log('------------------------------------------------------');
console.log('');

let nota1 = parseInt(prompt('Digite a primeira nota: '));
let nota2 = parseInt(prompt('Digite a segunda nota: '));

console.log('');
console.log('------------------------------------------------------');
console.log('');

let media = (nota1 + nota2) / 2; 

if (media < 10) {

    console.log('As informações estão erradas pois Giulia não tira menos que dez.');

    console.log('');
}
else  {

    console.log('Giulia gabaritou como sempre <3');

    console.log('');
};


