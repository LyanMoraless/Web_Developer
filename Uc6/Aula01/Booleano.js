//True:
//let number1 = "56";
//let number2 = 56;

console.log(number1 == number2)

//False
let number1 = "56";
let number2 = 56;

console.log(number1 === number2)

//Pelo JavaScript ser fracamente tipado acaba conflitando informações como essas
//Para descobrir o tipo da variável pode-se usar o (typeof) ou para mais especificidade (Number.isInteger(x)) -> retorna true or false