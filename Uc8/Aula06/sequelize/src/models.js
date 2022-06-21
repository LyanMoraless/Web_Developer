const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("escola_seq", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
});

const Area = sequelize.define('Area', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,

    }
}, {});

const Aluno = sequelize.define('Aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    ra: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255), //255 é o padrão, não seria necessário explicar
        allowNull: true 
    },
    senha: {
        type: DataTypes.STRING(40),
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
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {});

const Curso = sequelize.define('Curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ementa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    }

}, {});

const Turma = sequelize.define('Turma', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    inicio: {
        type: DataTypes.DATE,
    },
    fim: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {});

const Endereco = sequelize.define('Endereco', {
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
        type: DataTypes.STRING(9)
    },
    cidade: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.STRING(2)
    }
}, {});

Area.hasMany(Curso);
Curso.belongsTo(Area);

Curso.hasMany(Turma);
Turma.belongsTo(Curso);

Turma.belongsToMany(Aluno, {through: "TurmaAluno"});
Aluno.belongsToMany(Turma, {through: "TurmaAluno"});

Endereco.hasOne(Aluno);
Aluno.belongsTo(Endereco); //INVERTEU PARA A CHAVE ESTRANGEIRA FICAR NO ALUNO

module.exports = { sequelize, Area, Aluno, Curso, Turma, Endereco };