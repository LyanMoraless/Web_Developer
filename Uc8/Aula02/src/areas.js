const prompt = require('prompt-sync')();
const menus = require('./menus');
const mysql = require('mysql-await');

(async () => {

    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "escola"
    });

    connection.connect();

    let opt = "";

    do {
        opt = menus.areas();

        if (opt == "1") {
            const res = await connection.awaitQuery("Select id, nome from areas");
            console.log();

            // TÍTULO - TABLE

            console.log("#".padEnd(5, ' '), "Nome".padEnd(50, ' '), "Id".padEnd(20, ' '));

            //CONTEÚDO - TABLE

            res.forEach(area => {
                console.log(
                    `${area.id}`.padEnd(5, ' '),
                    area.nome.padEnd(50, ' ')
                );
            });

            console.log();

        }

        // PERGUNTA SOBRE ID 

        else if (opt = "2") {
            const nome = prompt("Digite o nome da área: ");

            const sn = prompt("Confrima a inclusão dessa área? (s/n) ");
            if (sn == "s" || sn == "S") {
                const res = await connection.awaitQuery("insert into areas (nome, id) values (?, ?)", [nome, id]);
                console.log(res);
            }
        }

        else if (opt = "3") {
            console.log();
            const id = prompt("Número da área que deseja alterar: ");
            const res = await connection.awaitQuery("select nome from areas where id = ?", [id]);

            if (res[0]) {
                console.log("Digite os dados que devem ser alterados: ");
                const nome = prompt(`nome(${res[0].nome}):`, res[0].nome);
                
                const sn = prompt("Confirma a alteração desta area? (s/n) ");
                if (sn == "s" || sn == "S") {
                    const res = await connection.awaitQuery("update areas set nome=? where id=?", [nome, id]);
                    console.log(res);
                }
            }
            else {
                console.log("A área não pode ter sido altrada...");
            }
        }
        else if (opt == "4") {
            console.log();
            const id = prompt("Digite o número da área que deseja excluir: ");
            const res = await connection.awaitQuery("select nome from areas where id = ?", [id]);
            if (res[0]) {
                const sn = prompt(`Deseja realmente excluir a área "${res[0].nome}"? (s/n) `);
                if (sn == "s" || sn == "S") {
                    const res = await connection.awaitQuery("delete from areas where id = ?", [id]);
                    console.log(res);
                }
            }
            else {
                console.log("Área não encontrada...");
            }
        }

    } while (!(opt == "s" || opt == "S"));

    connection.end();
})
