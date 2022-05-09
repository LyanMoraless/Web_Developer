const db = require('./db/bandas.js');

var bandas = [];

bandas.push({
    'id': 1,
    'nome': 'PoweRock'
});
bandas.push({
    'id': 2,
    'nome': 'Instrumential'
});
bandas.push({
    'id': 3,
    'nome': 'LinkPark'
});
bandas.push({
    'id': 4,
    'nome': 'Mauve'
});
bandas.push({
    'id': 5,
    'nome': 'RockPower'
});

db.salvar(bandas);