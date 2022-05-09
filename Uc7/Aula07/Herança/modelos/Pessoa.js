class Pessoa {

    #nome;
    #sobrenome;
    #documento; 

    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    };

    set nome(valor) {
        this.#nome = valor;
    };
    get nome() {
        return this.#nome;
    };

    
    set sobrenome(valor) {
        this.#sobrenome = this.sobrenome;
    };
    get sobrenome() {
        return this.#sobrenome
    };

    set documento(valor) {
        this.#documento = this.#documento;
    };
    get documento() {
        return this.#documento
    };
};

module.exports = Pessoa;
