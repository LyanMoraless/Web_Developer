use mysql;
set character_set_client = 'utf8';

drop database if exists find_soccer;
create database find_soccer collate utf8_general_ci;

use find_soccer;

create table usuarios (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    email varchar (255),
    senha varchar(40),
    cell varchar(15),
    rg char(14),
    cpf char(14),
    tipo enum('Ceo', 'Normal') not null
);

create table quadras (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    largura decimal(6,2),
    comprimento decimal(6,2),
    descricao text,
    piso enum('Society', 'Futsal', 'Grama', 'Híbrido') not null,
    vestiario boolean,
    banheiro boolean,
    chuveiro boolean,
    bebedouro boolean,
    coletes boolean,
    juiz boolean,
    cantina boolean,
    area_alimentacao boolean,
    chuteira_aluguel boolean,
    bola boolean,
    estado enum('Ocupada', 'Livre') not null,
    localizacao_id int not null
);

create table reservas (
    id int not null auto_increment primary key,
    datacao date not null,
    estado enum('Em Andamento', 'Finalizada') not null,
    jogadores int,
    preco decimal(5,2) not null,
    inicio date not null,
    fim date not null,
    usuario_id int not null,
    quadra_id int not null
);

create table quadra_tipos (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    quadra_id int not null
);

create table avaliacoes (
    id int not null auto_increment primary key,
    nota decimal(2,1) not null,
    comentario varchar(200),
    quadra_id int not null
); 

create table pagamentos (
    id int not null auto_increment primary key,
    preco decimal(5,2) not null,
    reserva_id int not null
);

create table pagamento_tipos (
    id int not null auto_increment  primary key,
    nome varchar(100) not null,
    pagamento_id int not null
);

create table localizacoes (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    slug char(10) not null,
    cell varchar(15),
    funcionamento date,
    descricao varchar(200),
    endereco_id int not null
);

create table enderecos (
    id int not null auto_increment primary key,
    logradouro varchar(100) not null,
    numero varchar(10) not null,
    complemento varchar(30),
    bairro varchar(50) not null,
    cep char(9),
    cidade varchar(100) not null,
    estado char(2) not null
);

alter table quadras
add constraint quadras_localizacao_fk foreign key (localizacao_id) references localizacoes(id);

alter table reservas
add constraint reservas_usuario_fk foreign key (usuario_id) references usuarios(id),
add constraint reservas_quadra_fk foreign key (quadra_id) references quadras(id);
