//RODAR: NODE MAIN.JS
const { sequelize, Area, Aluno, Turma, Curso, Endereco } = require('./models');
const colors = require('colors');

(async () => {
    await sequelize.sync({ force: true, logging: true });

    await Area.bulkCreate([
        { nome: 'Tecnologia da Informação' },
        { nome: 'Saúde' },
        { nome: 'Bem-Estar' }
    ]);

    await Aluno.bulkCreate([
        {
            nome: 'Lyan Gabriel Ruiz Morales',
            email: 'drlyanmorales@gmail.com',
            senha: '123454321',
            Endereco: {
                logradouro: 'Rua teste',
                numero: '123',
                bairro: 'Centro',
                cep: '12345-678',
                cidade: 'Bauru',
                estado: 'Sp'
            }
        },
        {
            nome: 'Elocin Ogramac',
            email: 'elocinOgramac@gmail.com',
            senha: '543212345'
        },
        {
            nome: 'ALUNO TESTE',
            email: 'ALUNOTESTE@gmail.com',
            senha: 'TESTEALUNO'
        }
    ],
    {
        include: [Endereco]
    });

    await Curso.bulkCreate([
        {
            nome: 'Tecnologia da informação',
            descricao: 'O curso possui 48 horas (...)',
            preco: 20.50
        },
        {
            nome: 'Técnico em informática',
            descricao: 'O curso técnico em (...)',
            preco: 300.00
        },
        {
            nome: 'Desenvolvimento Web',
            descricao: 'Melhor curso (...)',
            preco: 189.99
        },
        { nome: 'Massoterapia' },
        { nome: 'Comunicações' },
    ]);

    await Turma.bulkCreate([
        {
            inicio: new Date(2001, 5, 7),
            fim: new Date(2005, 7, 17)
        },
        { 
            inicio: new Date(2022, 9, 21)
        }
    ]);

    // ----------------------------------> <---------------------------------- //

    console.log('');
    console.log("Buscando todos os alunos".red.underline);
    console.log('');

    const alunos = await Aluno.findAll();
    console.log('');
    alunos.forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));
    console.log('');

    // --->

    console.log("Buscando aluno pela Primary Key".red.underline);
    console.log('');

    const aluno = await Aluno.findByPk(1);
    console.log('');
    console.log(aluno.nome.green)
    console.log('');

    // --->

    console.log("Alterando dados do aluno".red.underline)
    console.log('');

    const aluno1 = await Aluno.findByPk(3);
    aluno1.email = "emailteste@gmail.com";
    await aluno1.save();
    console.log('');
    (await Aluno.findAll()).forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));

    // --->

    console.log('');
    console.log("Exclusão do Aluno".red.underline);
    console.log('');

    const aluno2 = await Aluno.findByPk(3);
    console.log(aluno2.nome.green);
    await aluno2.destroy();
    console.log('');
    (await Aluno.findAll()).forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));
    console.log('');

})();