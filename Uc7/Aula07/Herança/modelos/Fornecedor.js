const Pessoa = require("./Pessoa");

class Fornecedor extends Pessoa {

    #prazoDePagamento;

    constructor(nome, sobrenome) {
        super(nome, sobrenome); //super faz a ação da classe pai
    };

    get prazoDePagamento() {
        return this.#prazoDePagamento;
    };
    set prazoDePagamento(valor) {
        this.#prazoDePagamento = valor;
    };
};

module.exports = Fornecedor