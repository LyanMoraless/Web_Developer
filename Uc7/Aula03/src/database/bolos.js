const fs = require('fs');
const { join } = require('path'); 

const filePath = join(__dirname, '..', '..', 'arquivos', 'bolos.json');

module.exports = {
    all: () => {
        let dados = fs.existsSync(filePath) ?
                    fs.readFileSync(filePath) : 
                    '[]';
        return JSON.parse(dados);
    },
    salvar: (bolos) => {
        fs.writeFileSync(filePath, JSON.stringify(bolos));
    }
}