-- DB = data base

-- Sair do DB escola

use mysql

-- Apagar e criar o DB escola

drop database if exists escola;
create database escola;

-- Utilizar o bando de dados

use escola;

-- Criando as tabelas do DB

create table areas(
    id int not null auto_increment primary key,
    nome varchar(50)
);

create table alunos(
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    ra char(10),
    telefone varchar(15),
    email varchar(255),
    senha varchar(40),
    rg char(14),
    cpf char(14),
    ativo boolean default 1
);

create table cursos(
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    descricao text,
    ementa text,
    area_id int not null,
    preco decimal(5,2)
);

create table turmas(
    id int not null auto_increment primary key,
    inicio date not null,
    fim date,
    curso_id int not null
);

create table turma_alunos(
    id int not null auto_increment primary key,
    aluno_id int not null,
    turma_id int not null
);

create table enderecos(
    id int not null auto_increment primary key,
    aluno_id int not null,
    logradouro varchar(100) not null,
    numero varchar(10) not null,
    complemento varchar(30),
    bairro varchar(50) not null,
    cep varchar(9) not null,
    cidade varchar(100) not null,
    estado char(2) not null
);

-- Relacionamentos de chaves

alter table cursos
add constraint cursos_area_fk foreign key (area_id) references areas(id);

alter table turmas
add constraint turmas_curso_fk foreign key (curso_id) references cursos(id);

alter table turma_alunos
add constraint turma_alunos_alunos_fk foreign key (aluno_id) references alunos(id),
add constraint turma_alunos_turmas_fk foreign key (turma_id) references turmas(id);


-- Adicionando dados

insert into areas(id, nome) values 
(1, 'Saúde'), 
(2, 'Gestão de Negócios'), 
(3, 'Tecnologia da Informação');

insert into cursos(nome, area_id) values 
('Técnico em Informática', 3),
('Técnico em Administração', 2),
('Técnico em Enfermagem', 1),
('Técnico em Bombeiro Civil', 1),
('Técnico em Farmácia', 1);

-- As tabelas que tem chaves estrangeiras e necessitam de outra tabela devem ser criadas após a tabela pai que possui a chave primaria