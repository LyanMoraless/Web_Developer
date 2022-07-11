// PRIMEIRA MANEIRA

// module.exports = (peso, altura) => {
//     if(altura == 0) return 0;
//     return Math.round((peso / (altura * altura)) * 100) / 100;
// };

// SEGUNDA MANEIRA

 function imc(peso, altura) {
    if(altura == 0) return 0;
    return Math.round((peso / (altura * altura)) * 100) / 100;
};

module.exports = { imc };