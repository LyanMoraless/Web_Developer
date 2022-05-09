//const prompt = require('prompt-sync')();

function calc() {

let nbs1 = document.getElementById('vlr1');
let nbs2 = document.getElementById('vlr2');
let nbs3 = document.getElementById('vlr3');

let img1 = document.getElementById('imagem1');
let img2 = document.getElementById('imagem2');
let img3 = document.getElementById('imagem3');

let frase1 = document.getElementById('text3');


while(nbs1 && nbs2 && nbs3 != 0) {

    if(nbs1 == nbs2 && nbs1 == nbs3 && nbs3 == nbs2) {
        //console.log('Equilátero');

            img1.src = "img/equilatero.png"; 

        break
        

    }
    else if(nbs1 == nbs2 && nbs1 != nbs3 || nbs1 == nbs3 && nbs1 != nbs2 || nbs2 == nbs3 && nbs2 != nbs1) {
        //console.log('Isósceles');
        
            img2.src = 'img/isosceles.jpg';
        
        break
    }
    else{
        //console.log('Escaleno');

            img3.src = 'img/escaleno.png'
            
        break
    }
}

};

// function image(src, width, height, alt) {
    
//     let img = document.createElement("img");

//         img.src = "./img/";
//         img.width = width;
//         img.height = height;
//         img.alt = alt;

//         document.body.appendChild(img);
// }

// img ('JavaScript.jpg', 776, 410, 'JavaSriptImage');
