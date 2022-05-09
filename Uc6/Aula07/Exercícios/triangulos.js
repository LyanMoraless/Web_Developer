const prompt = require('prompt-sync')();

let nbs1 = prompt('Digite o valor do primeiro lado: ');
let nbs2 = prompt('Digite o valor do segundo lado: ');
let nbs3 = prompt('Digite o valor do terceiro lado: ');

while(nbs1 && nbs2 && nbs3) {

    if(nbs1 == nbs2 && nbs1 == nbs3) {
        console.log('Equilátero');
        break
    }
    else if(nbs1 == nbs2 && nbs1 != nbs3 || nbs1 == nbs3 && nbs1 != nbs2 || nbs2 == nbs3 && nbs2 != nbs1) {
        console.log('Isósceles');
        break
    }
    else{
        console.log('Escaleno');
        break
    }
}

function image(url) {
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
}