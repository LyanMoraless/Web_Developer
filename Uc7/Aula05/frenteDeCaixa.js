class User {
    constructor(id, nome, dinheiro, preference, dislike, compra) {
        this.id = '';
        this.nome = nome;
        this.dinheiro = dinheiro;
        this.preference = preference;
        this.dislike = dislike;

        this.compra = [];
    };

    setCompra(produto, qntd, tipe) {
        this.compra = new Venda(produto, qntd, tipe);
    };

};

var giu = new User();
giu.nome = 'Giulia';
giu.dinheiro = 150.00;
giu.preference = 'Diamante Negro';
giu.dislike = 'Chocolate com Coco';


class Venda {
    constructor(id, produto, valor, qntd, tipe) {
        this.id = '';
        this.produto = produto;
        this.valor = valor;
        this.qntd = qntd;
        this.tipe = tipe;
    };
};

var venda1 = new Venda();
venda1.produto = 'Chocolate';
venda1.valor = 5.0;
venda1.qntd = 2;
venda1.tipe = 'Doce';


class Caixa {
    constructor(id, num, valorCompra, registro, dtAbert, dtFech, sldStart, sldExit) {
        this.id = '';
        this.num = num;
        this.valorCompra = valorCompra;
        this.registro = registro;
        this.dtAbert = dtAbert;
        this.dtFech = dtFech;
        this.sldStart = sldStart;
        this.sldExit = sldExit;
    };
};

var caixa1 = new Caixa();
caixa1.num = 1;
caixa1.valorCompra = 500;
caixa1.registro = 40;
caixa1.dtAbert = "27/05/2005";
caixa1.dtFech = "07/05/2005";
caixa1.sldStart = 30.000;
caixa1.sldExit = 100.000;


class Funcionario {
    constructor(id, nome, email, senha) {
        id = '';
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    };
};

var estagiario = new Funcionario();
estagiario.nome = "Alnio";
estagiario.email = "alniodotauste@gmail.com";
estagiario.senha = "123_321_tudo_sobre_dois";

class Produto {
    constructor(id, nome, valor, infos, ean) {
        this.id = '';
        this.nome = nome;
        this.valor = valor;
        this.infos = infos;
        this.ean = ean;
    };
};

var prod1 = new Produto();
prod1.nome = 'Chocolate com bombom';
prod1.valor = 32.00;
prod1.infos = "O chocolate é bom";
prod1.ean = 5415683;




class Pagamento {
    constructor(id, vlr, pgmt) {
        this.id = '';
        this.vlr = vlr;
        this.pgmt = pgmt;
    };
};

class Empresa {
    constructor(id, nome, cnpj, cpf, data) {
        this.id = '';
        this.nome = nome;
        this.cnpj = cnpj;
        this.cpf = cpf;
        this.data = data;
    };
};

var tauste = new Empresa();
tauste.nome = "Tauste";
tauste.cnpj = "0:123367";
tauste.cpf = "1234522-34";
tauste.data = "27/05/2005";

console.log();

console.log('------------------------------------------------------------------------');

console.log("Empresa: "+tauste.nome);
console.log("CNPJ: "+tauste.cnpj, "CPF: "+ tauste.cpf, "DATA: "+ tauste.data);

console.log();

console.log('------------------------------------------------------------------------');

console.log();

console.log(giu.nome, "comprou um", venda1.produto, "sendo que sua preferencia é", giu.preference);
console.log("As informações do prduto da", giu.nome, "são:");

console.log();

console.log('------------------------------------------------------------------------');

console.log();

console.log("Nome: "+prod1.nome);
console.log("Preço R$: "+prod1.valor);
console.log("Descrição: "+prod1.infos);
console.log("Código (Ean): "+prod1.ean);

console.log();

console.log('------------------------------------------------------------------------');

