const Modelo = require("./framework/Modelo");
const Cliente = require("../Herança/modelos/Cliente");
const Produto = require("./modelos/Produto");

const { join } = require('path');

Modelo.dir = join(__dirname, 'dados');

console.log("ANTES:", Produto.consultar(2));

let p = new Produto();
p.assign(Produto.consultar(2));
p.excluir();


console.log("DEPOIS:", Produto.consultar(2));
