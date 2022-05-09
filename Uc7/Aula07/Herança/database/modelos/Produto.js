const Modelo = require("./framework/Modelo");

class Produto extends Modelo{

    nome = '';
    valor = 0;
    
    constructor() {
        super("produtos.json");
    };
};

module.exports = Produto;