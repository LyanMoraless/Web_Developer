const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, '..', '..', 'arquivos', 'bandas.json')

module.exports = {
    todos: () => {
        let dados = fs.existsSync(filePath) ?
                    fs.readFileSync(filePath) :
                    '[]';
        return JSON.parse(dados);
    },
    salvar: (bandas) => {
        fs.writeFileSync(filePath, JSON.stringify(bandas));
    }
}