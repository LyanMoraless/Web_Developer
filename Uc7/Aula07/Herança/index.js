const Cliente = require('./modelos/Cliente');
const Fornecedor = require('./modelos/Fornecedor');
const Pessoa = require('./modelos/Pessoa');

var p1 = new Pessoa("Lyan", "Morales");
p1.documento = "122.321.234-12";

var c1 = new Cliente("Giulia", "Oliveira");
c1.limiteDeCredito = 4000;
c1.documento = "123.321.234-45";

var f1 = new Fornecedor("Vania", "Oliveira");
f1.prazoDePagamento = ("27/01/2022");

