const db = require('./db/estilosBandas.js');

var tipos = [];

tipos.push({
    'id': 1,
    'nome': 'Metal'
});
tipos.push({
    'id': 2,
    'nome': 'HardRock'
});
tipos.push({
    'id': 3,
    'nome': 'Gospel'
});
tipos.push({
    'id': 4,
    'nome': 'Eletronica'
});
tipos.push({
    'id': 5,
    'nome': 'Sertanejo'
});

db.salvar(tipos);