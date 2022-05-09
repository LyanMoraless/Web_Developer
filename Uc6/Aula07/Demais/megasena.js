var posicao;

function calc() {
    
    return Math.round(Math.random()) * 61;

};

function mega() {

    var megaSena = [];
    let numero = 1;

    while(numero <= 6) {

        let numeroAleatorio = calc();
        let achou = false;

        if (numeroAleatorio !== 0 && numeroAleatorio <=60)

            for (posicao = 0; posicao < megaSena.length; posicao++) {

                if (megaSena(posicao) == numeroAleatorio) {
                    
                    achou = true
                    break

                };

            };

            if(achou == false){

                megaSena.push(numeroAleatorio)
                numero++
            };

    };

};

console.log(megaSena);

