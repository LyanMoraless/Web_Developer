
var usuario = {
    email: "Digite seu email",
    senha: "Digite sua senha",
    nome: "Digite seu primeiro nome",
    nomedeUsuario: "Escolha um nome para o usuário",
    tema: ["Escuro", "Claro"],
    idioma: ["Portugues", "Ingles", "Espanhol"],
    atividade: "Tempo de uso",
}

var quadra = {
    rua: "Duque de Caxias",
    num: "1-67",
    horarioDeFuncionamento: "5hrs às 22hrs"
}
var noticias = {

}

    function login(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
        this.registrado = false;

        if (usuario && senha) {
            this.registrado = true;
        }
    }

    
