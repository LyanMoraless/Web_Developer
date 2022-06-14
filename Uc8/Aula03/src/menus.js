const prompt = require('prompt-sync')();

function principal() {

    console.log("#".padEnd(80, "#"));
    console.log();

    let name = prompt("Digite seu nome: ");

    console.log();

    console.log(`Seja bem vindo, ${name}!`);

    let opt2 = prompt(`${name}, deseja realizar alterações? (s/n)`);
    do {

        let opt = prompt("Cursos 1 Areas 2: ");

        if (opt == "1") {
            cursos();
        }
        else if (opt == "2") {
            areas();
        }
        else {
            console.log("Alteração não identificada...")
        }
    } while (opt2 == "s" || opt2 == "S");

}

function cursos() {
    console.log("- CURSOS ".padEnd(80, "-"));
    console.log("1) Listar");
    console.log("2) Inserir");
    console.log("3) Alterar");
    console.log("4) Excluir");
    console.log("S) Sair");
    return prompt("Selecione uma das opções: ");
}


function areas() {
    console.log("- AREAS ".padEnd(80, "-"));
    console.log("1) Listar 2) Inserir 3) Alterar 4) Excluir S) Sair");
    return prompt("Selecione uma das opções: ");
}

module.exports = { principal, areas, cursos };