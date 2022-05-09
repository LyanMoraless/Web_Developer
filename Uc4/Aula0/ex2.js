function verificar() {
    var num1 = document.getElementById("numero").value;
    var num2 = document.getElementById("numero2").value; 

    if(num1 > num2) {
         document.getElementById('resultado').innerHTML = num1
    }
    else {
        document.getElementById('resultado').innerHTML = num2
    }
}