const { Tarefa, sequelize } = require('./models'); 

describe("Tarefas", () => {

    beforeAll( async() => {
        await sequelize.sync();
    })

    test("Inserir Tarefas", async () =>{
        const tarefa = await Tarefa.create({
            nome: "Compraz arroz",
            descricao: "Está mais bonito no Tauste",
            data: new Date(2022, 7, 15),
            concluida: false
        });

        //A TAREFA NÃO PODE SER NULA...
        expect(tarefa).not.toBeNull();
        expect(tarefa.id).not.toBeNull();
        expect(tarefa.nome).toMatch(/arroz/);


        //O ÚNICO CAMPO OBRIGATORIO É O NOME
        const tarefa2 = await Tarefa.create({
            nome: "Comprar feijão"
        });

        expect(tarefa2).not.toBeNull();
        
        //PRECISA GERAR UM ERRO AO TENTAR INCLUIR UMA TAREFA SEM NOME
        await expect(Tarefa.create()).rejects.toThrow();
    })

    //IMPLEMENTAR
    
    test("Alterar Tarefa", () => {})
    test("Excluir Tarefa", () => {})
    test("Consultar Tarefas", () => {})
    test("Consultar Tarefas Pendentes", () => {})

})