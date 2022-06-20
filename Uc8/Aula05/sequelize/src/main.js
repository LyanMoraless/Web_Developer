//RODAR: NODE MAIN.JS
const { sequelize, Area, Aluno } = require('./models');
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
            senha: '123454321'
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
    ]);

    // ----------------------------------> <---------------------------------- //
    console.log('');

    console.log("Buscando todos os alunos".red.underline);

    const alunos = await Aluno.findAll();
    console.log('');
    alunos.forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));
    console.log('');

    // --->

    console.log('');
    console.log("Buscando aluno pela Primary Key".red.underline);

    const aluno = await Aluno.findByPk(1);
    console.log('');
    console.log(aluno.nome.green)
    console.log('');

    // --->

    console.log('');
    console.log("Alterando dados do aluno".red.underline)

    const aluno1 = await Aluno.findByPk(3);
    aluno1.email = "emailteste@gmail.com";
    await aluno1.save();
    console.log('');
    (await Aluno.findAll()).forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));
    console.log('');

    // --->

    console.log('');
    console.log("Exclusão do Aluno".red.underline);

    const aluno2 = await Aluno.findByPk(3);
    console.log(aluno2.nome.green);
    await aluno2.destroy();
    console.log('');
    (await Aluno.findAll()).forEach((aluno) => console.log(aluno.nome.green, aluno.email.green));
    console.log('');

})();