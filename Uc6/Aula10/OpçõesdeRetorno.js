function espaco(largura, altura){
    const espaco = largura * altura
    if( espaco > 20){
        console.log(`Valor não permitido: ${espaco}m²` )
    }else{
        return espaco
    }
}

console.log(espaco(2, 2))
console.log(espaco(2))
console.log(espaco())
console.log(espaco(2, 3, 22, 44))
console.log(espaco(5, 5))