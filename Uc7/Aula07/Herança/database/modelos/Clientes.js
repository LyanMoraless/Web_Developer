const Modelo = require("./framework/Modelo");

class Cliente extends Modelo {

    nome = '';
    valor = 0;
    
    constructor() {
        super("clientes.json");
    };
};

module.exports = Cliente;