const { join } = require("path");
const Cliente = require("./Clientes");
const Modelo = require("./framework/Modelo");
const Produto = require("./Produto");

Modelo.dir = join(__dirname, 'dados');

var p1 = new Produto();
p1.nome = "Produto 1";
p1.valor = 50;
p1.salvar();

var p2 = new Produto();
p2.nome = "Produto 1";
p2.valor = 50;
p2.salvar();

var c1 = new Cliente;
c1.nome = "Cliente 1";
c1.salvar();