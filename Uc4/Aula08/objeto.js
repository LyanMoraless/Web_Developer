function Ator(id, sobrenome, nome) {
    this.id = id,
    this.sobrenome = sobrenome,
    this.nome = nome,
    this.site = '',
    this.email = '';

    this.nomeCompleto = function() {
        return this.sobrenome + ', ' + this.nome;
    }
}

var autor2 = new ator(2, Bernardes, Antonio);
    autor2.email = 'antoniobernardes@gmail.com'

var autor = {
    id: 1,
    sobrenome: "Assis",
    nome: "de Machado",
    site: 'https//www.machadodeassisjá.com.br',
    email: 'machadodeassis@gmail.com',

},

var editora = {
    id: 1,
    nome = 'Aguas novas',
}

var livro = {
    id: 1,
    titulo: 'A culpa é das estrelas',
    resumo: '...',
    ano: 2010,
    edicao: 1,
    classificaoEtaria: 'jovens',
    genero: genero3,
    autores: [autor, autor3],
    editora: editora, 
    idioma: 'pt-br',
},

//Objeto
var genero = {
//Propriedades
    id: 1,
    tipo: "terror",

};

console.log(ator2.nomeCompleto);
