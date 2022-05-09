class Pessoa {
    
//Atributos privados só podem ser acessados de dentro da classe

    #nome;
    #sobrenome;
    #documento;

    constructor(nome, sobrenome, documento) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#documento = documento;
    };

    nomeCompleto() {
        return this.#nome + ' ' + this.#sobrenome;
    };

    saudacao() {
        console.log(`Olá ${this.nomeCompleto()}`);
    };

    get nome () {
        return this.#nome;
    };
    set nome (valor) {
        this.nome = valor;
    };

    get sobrenome () {
        return this.#sobrenome;
    };
    set sobrenome (valor) {
        this.sobrenome = valor;
    };

    get documento () {
        return this.#documento;
    };
    set documento (valor) {
        this.#documento;
    };
};

var pessoas = [
    new Pessoa ("Lyan", "Morales", "123.321.345-22"),
    new Pessoa("Giulia", "Oliveira", "321.123.687-33"),
    new Pessoa("Love", "On", "Air")
];

console.log('For in')

for (i in pessoas) {
    pessoas[i].saudacao();
};

//pessoas[0].saudacao();

console.log('---------------------------')

console.log('For Each')

pessoas.forEach((pessoa) => pessoa.saudacao());

// var person1 = new Pessoa ("Lyan", "Morales", "123.321.345-22")
// person1.saudacao();
// person1.nomeCompleto();

// var person2 = new Pessoa("Giulia", "Oliveira", "321.123.687-33")
// person2.saudacao();
// person2.nomeCompleto();