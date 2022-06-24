const prompt = require('prompt-sync')();

var jogo = parseInt(prompt('Digite um jogo: '));
var pont = parseInt(prompt('Digite a pontuação do jogo: '));

var pont1 = 15;
var pont2 = 30;
var pont3 = 50;
var pont4 = 27;

while(pont > 4) {
    if (pont > pont1 && jogo > 4) {
        console.log(`Jogo ${jogo}, pontuação ${pont}`);
        break;
    }
    else{
        console.log(`A maior pontuação continua sendo do terceiro jogo, com ${pont3} pontos`)
        break;
    };
};
