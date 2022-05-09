function verificar() {
    var mes = document.getElementById("mes").value;
    var estacao = "";

    if (mes == "Janeiro" || mes == "Fevereiro" || mes == "Março") {
        estacao = "Verão";
    }
    else if (mes == "Abril" || mes == "Maio" || mes == "Junho") {
        estacao = "Outono";
    }
    else if (mes == "Julho" || mes == "Agosto" || mes == "Setembro") {
        estacao = "Inverno";
    }
    else if (mes == "Outubro" || mes == "Novembro" || mes == "Dezembro"){
        estacao = "Primavera";
    }
    else {
        alert ('Mês invalido!');
    }

    document.getElementById('resultado').innerHTML = estacao;

}