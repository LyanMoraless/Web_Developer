var maquinanumber = Math.round(Math.random() * 100)

function change() {
maquinanumber = Math.round(Math.random() * 100) 
}

function verificar() {
    var number = document.getElementById("numescolhido").value;

    if (number > maquinanumber) {
        document.getElementById('resultado').innerHTML = "O número escolhido por você é maior"
    }
    else if (number < maquinanumber) {
        document.getElementById('resultado').innerHTML = "O número escolhido por você é menor"
    }
    else {
        document.getElementById('resultado').innerHTML = "O número escolhido por você está correto! Parabéns <3"
    }
}


