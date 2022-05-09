// função Literal

function nomeFuncao(){

}

//Armazenando em variavel

const nome = function(){

} 

//Armazenar em array

const array = [function (a, b) {
    return a + b
}, nomeFuncao, nome]
console.log(array[0](2, 4))

//Armazenar em um atributo de objeto

const obj = {}
obj.imprimir = function (){return "E ai"}
console.log(obj.imprimir())

//Passar função como paramentro

function teste(tem){
    tem()
}

teste(function () { console.log("Imprimindo na tela......")})

//Função pode retornar e conter uma função

function operacao(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

operacao(2, 3)(4)