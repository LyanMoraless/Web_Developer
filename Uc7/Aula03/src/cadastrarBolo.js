//Nome, Ingredientes, Modo, Tempo, Porções//

const database = require('./database/bolos.js');

var bolos = [];

bolos.push({
    "id": 1,
    "sabor": "Maçã",
    "ingredientes": "Maçã, Açúcar, Farinha, Leite, Fermento, Manteiga",
    "modoDePreparo": "Prepare",
    "tempo": "60 dias",
    "porcoes": 2
});

database.salvar(bolos);
