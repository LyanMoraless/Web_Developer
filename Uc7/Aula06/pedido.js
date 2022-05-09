//NÃO FINALIZADO


class Pedido {

    #arrayProduto
    #totalBruto
    #desconto

    constructor(arrayProduto, totalBruto, desconto) {
        this.#arrayProduto = arrayProduto;
        this.#totalBruto = totalBruto;
        this.#desconto = desconto;
    };


    pedidoTodo() {
        return this.#totalBruto, this.#desconto, this.#arrayProduto;
    };

    exib() {
        console.log('Compra', `${this.pedidoTodo}`);
    };
};

var pedidos = [
    new Pedido('Leite', 4, 3.5),
    new Pedido('Açúcar', 1, 2.5),
    new Pedido('Maçã', 20, 0.5) 
]; 

pedidos.forEach((pedido) => pedido.exib());


// class Produto {

//     #nome
//     #qtnd
//     #valor

//     constructor(nome, qtnd, valor) {
//         this.nome = nome;
//         this.qtnd = qtnd;
//         this.valor = valor;
//     };
// }

// var produtos = [
//     new Produto('Leite', 4, 3.5),
//     new Produto('Açúcar', 1, 2.5),
//     new Produto('Maçã', 20, 0.5)
// ];

