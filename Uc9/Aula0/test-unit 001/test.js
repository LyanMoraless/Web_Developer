const colors = require('colors');
const { aplDescont } = require('./index.js');

function testAplDescont() {
    return aplDescont(100,10) === 90;
};

console.log(`Aplicando desconto de 10 em 100, ${testAplDescont()}`);

function testAplDescontMaiorQueOValor() {
    return aplDescont(100, 110) === 0;
};

console.log(`Aplicando desconto maior que o valor ${testAplDescontMaiorQueOValor()}`);

console.log('Teste'.red)
