const prompt = require('prompt-sync')();

else if (opt == '3') {

    // 1 Solicitar o curso que deseja ser alterado(id)
    // 2 Exibir os dados do curso selecionado
    // 3 Solicitar a alteração dos campos do curso
    // 4 Confirmação da alteração
    // Publicar (alterar os dados)

    console.log()

    const id = prompt('Informe o id do curso que deseja ser alterado: ');
    const res = await coneccao.awaitQuery("select nome, area_id from cursos where id = ?", [id]);

    if (res[0]) { //O zero é da posição, ou seja, se houver a posição 0 ele roda o script
        console.log("nome: ", res[0].nome);
        console.log("area_id: ", res[0].area_id);

        console.log("Digite os dados que deseja alterar: ");
        const nome = prompt("nome: ", res[0].nome);
        const area_id = prompt("area.id: ", res[0].area_id);

        const sn = prompt("Confirma a alteração deste curso? (s/n) ");
        if (sn == 's' || sn = 'S') {
            const res = await coneccao.awaitQuery("update cursos set nome=?, area_id=? where id=?", [nome, area_id, id]);
            console.log(res);
        }

    }
    else {
        console.log('Curso não encontrado');
    }
}
else if (opt == '4') {
    console.log()
    const id = prompt('Informe qual curso deseja deletar: ');
    const res = await coneccao.awaitQuery("select nome from cursos where id = ?", [id]);

    if (!res[0]) {
        console.log("O curso não foi encontrado")
    }
    else {
        const sn = prompt(`Deseja realmente excluir o curso "${res[0].nome}"? (s/n) `);
        if (sn == 's' || sn == 'S') {
            const res = await coneccao.awaitQuery("delete from cursos where id = ?", [id]);
            console.log(res);
        }
    }
while (!(opt == 's' || opt == 'S'));

    coneccao.end();