class Pedido {
    #produtos = [];
    #totalBruto = 0;
    #desconto = 0;

    constructor() {

    }

    addProduto(nome, qtde, valor) {
        this.#produtos.push({
            nome,
            qtde,
            valor,
            get total() { 
                return this.valor * this.qtde
            }
        });

        this.#totalBruto += valor * qtde;
    }

    set desconto(valor) {
        if (valor > 100) //100% de desconto possível
            throw new Error('Valor de desconto inválido');

        this.#desconto = valor;
    }

    get total() {
        let valorDesconto = this.#totalBruto * (this.#desconto / 100);
        return Math.round((this.#totalBruto - valorDesconto)*100)/100; //Delimitação em dois denominadores pós vírgula
    }

    exibir () {
        console.log('---------- PEDIDO ----------');
        console.log('ITENS ----------------------');
        this.#produtos.forEach((produto) => {
            console.log(`${produto.nome.padEnd(9, ' ')
                } ${produto.qtde.toString().padStart(4, ' ')} ${produto.valor.toString().padStart(5, ' ')} ${produto.total.toString().padStart(7, ' ') }`)
        });
        console.log('TOTAL ----------------------');
        console.log(`Total Items: ${this.#totalBruto.toString().padStart(15,' ')}`);
        console.log(`Descontos: ${this.#desconto.toString().padStart(17, ' ')}`);
        console.log(`Total: ${this.total.toString().padStart(21, ' ')
}`);
//padStart -> estilização da codificação
    }
}


let pedido = new Pedido();
pedido.addProduto('Arroz', 10, 5.5);
pedido.addProduto('Feijão', 5, 10.5);
pedido.addProduto('Macarrão', 3, 3.35);

pedido.desconto = 110; //desconto de 32% entre 100%

pedido.exibir();