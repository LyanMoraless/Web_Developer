class Receita {

    #nome 
    #ingredientes = [];
    #preparos = [];
    #tempo = 0;
    #porcoes = 0;

    constructor() {

    };

    addIngrediente(nome, qntd) {
        this.#ingredientes.push({
            nome,
            qntd,

            // get ing() {
            //     return this.nome + this.qntd;
            // }
        });
    };

    addPreparo(num, passo) {
        this.#preparos.push({
            num,
            passo
        });
    };

//<--GETS E SETS-->//    
//-----------------------------------------------------//

    get nome() {
        return this.#nome;
    };
    set nome(valor) {
        this.#nome = valor;
    };

//-----------------------------------------------------//
    
    get tempo() {
        return this.#tempo;
    };
    set tempo(valor) {
        this.#tempo = valor;
    };

//-----------------------------------------------------//

    get porcoes() {
        return this.#porcoes;
    };
    set porcoes(valor) {
        this.#porcoes = valor;
    };

//-----------------------------------------------------//

//EXIBIÇÃO

    #linha() {
        console.log(''.padEnd(30, "-"));
    }

    exib() {

        this.#linha();

        console.log('RECEITAS');

        this.#linha();

        console.log("Receita de", this.nome);
        console.log("Tempo:", this.tempo);
        console.log("Rende", this.porcoes);

        this.#linha();

        console.log('Ingredientes');

        this.#linha();

        this.#ingredientes.forEach((ingrediente) => {
            console.log(ingrediente.nome.padEnd(19, ' '), ingrediente.qntd);
        });

        this.#linha();

        console.log('Preparo');

        this.#linha();

        this.#preparos.forEach((preparo) => {
            console.log(preparo.num.toString().padStart(5, ' '), preparo.passo);
        });
        
        this.#linha();
    };  
};

let receita1 = new Receita();

receita1.nome = 'Bolo de chocolate';
receita1.tempo = "50 minutos";
receita1.porcoes = 'Até 5 porções';

receita1.addIngrediente('Leite', 2);
receita1.addIngrediente('Açúcar', 2);
receita1.addIngrediente('Farinha', 2);
receita1.addIngrediente('Ovos', 2);
receita1.addIngrediente('Fermento', 2);

receita1.addPreparo(1, 'Adicione');
receita1.addPreparo(2, 'Mexa');
receita1.addPreparo(3, 'Leve ao fogo');
receita1.addPreparo(4, 'Esfriar');
receita1.addPreparo(5, 'Consumir');

receita1.exib();