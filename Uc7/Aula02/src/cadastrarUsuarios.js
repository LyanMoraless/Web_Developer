const db = require('./db/usuarios.js');

var usuarios = []; //db.todos();
    
    usuarios.push({
        'id': 1,
        'nome': 'Lyan',
        'sobrenome': 'Gabriel',
        'email': 'drlyanmorales@gmail.com',
        'senha': '123'
    });
    usuarios.push({
        'id': 2,
        'nome': 'Giu',
        'sobrenome': 'Oliveira',
        'email': 'giuoliveira@gmail.com',
        'senha': '123'
    });

    db.salvar(usuarios)

