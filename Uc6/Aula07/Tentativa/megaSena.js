//FUNÇÃO PRINCIPAL//
//-----------------------------------------------------------------------------------------------------------------------------------------//
function individual(max) {
    var principal = [];
    qnum = document.getElementById("qnum").value;

    for (j = 0; j < qnum; j++) {

        var atual = Math.floor(Math.random() * max + 1);

        for (i = 0; i < principal.length; i++) {

            if (atual === principal[i]) {
                atual = Math.floor(Math.random() * max + 1); i = -1;
            }
        }

        principal[i] = atual;

    }


    principal = principal.sort(function (a, b) { return a - b });

    var ext = document.createElement("DIV");
    ext.setAttribute("style", "background-color:none; margin:10px; width:100%;float:left;");
    for (i = 0; i < qnum; i++) {

        var x = document.createElement("DIV");
        var p = document.createElement("DIV");
        var t = document.createTextNode(principal[i]);

//ESTILIZAÇÃO//
//-----------------------------------------------------------------------------------------------------------------------------------------//

        x.setAttribute("style", "text-align:center;background-color: #cdcdcd;height:50px;width:50px;border-radius:100%;float:left;margin:10px;");
        p.setAttribute("style", "background-color: #cdcdcd;height:10px;width:10px;border-radius:00%;float:left;position:relative;top:12px;left:18px;vertical-align:+15px;");
        ext.appendChild(x);
        x.appendChild(p);
        p.appendChild(t);
        document.getElementById("ext").appendChild(ext);
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------//

//FUNÇÕES//
//-----------------------------------------------------------------------------------------------------------------------------------------//
function megaSena() {

    document.getElementById("ext").innerHTML = "";
    qjog = document.getElementById("qjog").value;
    for (n = 1; n <= qjog; n++) { individual(60); }
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

function resetar() {
    document.getElementById("ext").innerHTML = "";
    document.getElementById("qjog").value = "1";
    document.getElementById("qnum").value = "6";
}

//-----------------------------------------------------------------------------------------------------------------------------------------//
