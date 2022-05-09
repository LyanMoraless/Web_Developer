const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, '..', '..', 'arquivos', 'estilosBandas.json')

module.exports = {
    todos: () => {
        let dados = fs.existsSync(filePath) ?
                    fs.readFileSync(filePath) :
                    '[]';
        return JSON.parse(dados);
    },
    salvar: (tipos) => {
        fs.writeFileSync(filePath, JSON.stringify(tipos));
    }
}