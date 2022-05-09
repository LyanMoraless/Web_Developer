class BandaEstilo {
    constructor (nome = '') {
        this.nome = '';
    };
};

var rock = new BandaEstilo();
rock.nome = 'Rock';

var sertanejo = new BandaEstilo();
sertanejo.nome = 'Sertanejo';

class Banda {
    constructor (estilo, nome) {
        this.estilo = estilo;
        this.nome = nome;
        this.desc = '';
        this.foto = '';
    };
};
 
var paralamas = new Banda(rock, 'Paralamas do sucesso');
//paralamas.estilo = rock;
//paralamas.nome = "Paralamas do sucesso";

class Evento {
    constructor (nome, data) {
        this.nome = nome;
        this.data = data;
        this.desc = '';
        this.local = '';
        this.whats = '';
        this.phone = '';
        this.web = '';
    };
};

var dia = new Evento();
dia.data = '12/01/2040'

class Usuario {
    constructor(nomeUser, email, endereco) {
        this.nomeUser = nomeUser;
        this.email = email;
        this.senha = '';
        this.endereco = null;
    };

    setEndereco(log, numero, cidade, estado) {
        this.endereco = new Endereco(log, numero, cidade, estado)
    };
    
};

    

var valter = new Usuario();
valter.nomeUser = 'Valtin';
valter.email = 'valtindasboa@gmail.com';

var giu = new Usuario();
giu.nomeUser = 'Giuliazinha';
giu.email = 'giuzinhalinda@gmail.com';

class Endereco {
    constructor (log, numero, cidade, estado) {
        this.log = log;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.complemento = '';
        this.bairro = '';
        this.cep = '';
        
    };
}

var end1 = new Endereco();
end1.log = 'Rua bairrin UmDoix';
end1.numero = '2-37';
end1.cidade = 'Bauru';
end1.estado = 'São Paulo';


console.log("A banda", paralamas.nome, "é do estilo", paralamas.estilo.nome, "ocorrendo dia", dia.data);
console.log("O nome dos usuários são", valter.nomeUser, ",", giu.nomeUser, "e seus emails", valter.email, ",", giu.email);
console.log("A localização será na", end1.log, ", número", end1.numero, ",", end1.cidade + "/" + end1.estado);

