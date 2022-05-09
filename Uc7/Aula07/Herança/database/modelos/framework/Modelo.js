const fs = require('fs');
const {join} = require ('path');

class Modelo{

    static dir;

    #arquivo;
    id = 0;
    dataCadastro = new Date();
    dataAtualizacao = new Date(); //precisam ser públicos pois não conseguiriam ser acessados de fora

    constructor(arquivo) {
        this.#arquivo = arquivo;
    };

    salvar() {
        console.log('Gravando o objeto', Object.entries(this), "no arquivo", this.#arquivo);

        var dados = this.listar();

        if (this.id == 0) {
            dados.push(this);
        }
        else{
        };

        fs.writeFileSync(join(Modelo.dir, this.#arquivo),  JSON.stringify(dados), null, '\t')
    };

    delete() {

    };

    static cosultar(id) {

    };

    static listar() {
        try {
            const dados = fs.existsSync(join(Modelo.dir, this.#arquivo) ? fs.readFileSync(fileName) : ''
        return JSON.parse(dados);
        }

        catch(erro) {
            return;
        };
    };
};

module.exports = Modelo;