const prompt = require('prompt-sync')();

function principal() {

    console.log("Selecione o que deseja analisar") 
    let opt = prompt("Cursos 1 Areas 2: ")

        if(opt == "1") {
            cursos();
        }
        else if(opt == "2") {
            areas();
        }
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