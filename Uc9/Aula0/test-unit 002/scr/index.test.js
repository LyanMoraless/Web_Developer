const { aplDescont } = require("./index.js");

const products = [
    {
        nome: 'Arroz',
        preco: 10,
        desconto: 2,
        valor: 8
    },
    {
        nome: 'Feijão',
        preco: 12,
        desconto: 0,
        valor: 12
    }
]

describe("Cálculo de desconto", () => {
    test("Desconto de 10 em 100", () => {
        expect(aplDescont(100,10)).toBe(90);
    });    
});
test("Desconto maior que o valor", () => {
    expect(aplDescont(100,110)).toBe(0);
});

