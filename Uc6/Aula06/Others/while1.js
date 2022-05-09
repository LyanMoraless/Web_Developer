const prompt = require('prompt-sync')();

let i = +prompt('Digite a senha: ');

while (i) {
    if (i == 2002){
        console.log('Acesso Liberado');
        break;
    }
    else {
        console.log('Senha inválida')
        break;
    };
}

