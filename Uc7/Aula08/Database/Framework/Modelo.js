const fs = require('fs');
const {join} = require('path');

class Modelo {
    static dir;
    static arquivo = '';

    static get arquivoCaminho() {
        return join(this.dir, this.arquivo);
    }

    id=0;
    dataCadastro=new Date();
    dataAtualizacao=new Date();

    constructor() {
    }

    assign (obj={}) {
        Object.assign(this, obj);
    }

    salvar() {
        let dados = this.constructor.listar();

        if (this.id == 0) {
            this.id = dados.length > 0 ? dados[dados.length - 1].id + 1 : 1;
            dados.push(this);
        }
        else {
            let idx = dados.findIndex((obj) => obj.id == this.id);
            if (idx == -1) {
                throw new Error("Objeto não encontrado");
            }

            dados[idx] = this;
        }

        fs.writeFileSync(this.constructor.arquivoCaminho, JSON.stringify(dados, null, '\t'))
    }

    excluir() {
        let dados = this.constructor.listar();
        let idx = dados.findIndex((obj) => obj.id == this.id);
        if (idx == -1) {
            throw new Error("Objeto não encontrado");
        }

        dados.splice(idx);

        fs.writeFileSync(this.constructor.arquivoCaminho, JSON.stringify(dados, null, '\t'))
    }

    static consultar(id) {
        let dados = this.listar().filter((obj) => obj.id == id);
        return dados.length > 0 ? dados[0] : null;
    }

    static listar() { 
        try {
            const dados = fs.existsSync(this.arquivoCaminho) ? 
                fs.readFileSync(this.arquivoCaminho) : '';
            return JSON.parse(dados);
        }
        catch (erro) {
            return [];
        }
    }

}

module.exports = Modelo