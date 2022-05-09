 //ParseInt = define que é um number || +prompt('x');

        function clicar() {

            let nota1 = +document.getElementById("prm").value;
            let nota2 = +document.getElementById("sgn").value;

            var media = (nota1 + nota2) / 2;

            document.getElementById("media").innerHTML = media;

            // if (media >= 10) {

            //     innerHTML.media = ('Aprovadíssimo');
            // }
            // else if (media >= 7) {

            //     innerHTML.media = ('Aprovado');
            // }
            // else {

            //     innerHTML.media = ('Reprovado');
            // };
        };

    



/*const prompt = require('prompt-sync')();

//ParseInt = define que é um number || +prompt('x');

let nota1 = document.getElementById("prm");
let nota2 = document.getElementById("sgn");

let media = (nota1 + nota2) / 2; 

if (media >= 10) {

    console.log('Aprovado com Distinção');
}
else if(media >= 7) {

    console.log('Aprovado');
}
else {

    console.log('Reprovado');
};
*/

