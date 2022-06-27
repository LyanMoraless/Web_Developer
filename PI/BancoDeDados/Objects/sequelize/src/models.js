//Fazer instalação do sequelize 
// npm install sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("find_soccer_2", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
});

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    cell: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    rg: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    tipo: {
        type: DataTypes.STRING(20)
    }
});

const Reserva = sequelize.define("reserva", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    datacao: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.STRING(20)
    },
    jogador: {
        type: DataTypes.INTEGER
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    inicio: {
        type: DataTypes.DATE
    },
    fim: {
        type: DataTypes.DATE
    }
});

const Quadra = sequelize.define("quadra", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull:  true
    },
    largura: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    piso: {
        type: DataTypes.STRING(13)
    },
    vestiario: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    banheiro: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    chuveiro: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    bebedouro: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    coletes: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    juiz: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    cantina: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    area_alimentacao: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    chuteira_aluguel: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    bola: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING(10)
    }
});

const Quadra_Tipo = sequelize.define("quadra_tipo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    }
});

const Avaliacao = sequelize.define("avaliacao", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nota: {
        type: DataTypes.DECIMAL
    },
    comentario: {
        type: DataTypes.STRING(200),
        allowNull: true
    }
});

const Pagamento = sequelize.define("pagamento", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    preco: {
        type: DataTypes.DECIMAL
    }
});

const Pagamento_Tipo = sequelize.define("pagamento_tipo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    }
});

const Localizacao = sequelize.define("localizacao", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    slug: {
        type: DataTypes.STRING(10)
    },
    cell: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    funcionamento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: true
    }
});

const endereco = sequelize.define("endereco", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    logradouro: {
        type: DataTypes.STRING(100)
    },
    numero: {
        type: DataTypes.STRING(10)
    },
    complemento: {
        type: DataTypes.STRING(30), 
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(50)
    },
    cep: {
        type: DataTypes.STRING(9),
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.STRING(2)
    }
})