-- DB = data base

-- Sair do DB escola

use mysql

set character_set_client = 'utf8';

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
('Técnico em Informática para internet', 3),
('Técnico em Administração', 2),
('Técnico em Enfermagem', 1),
('Técnico em Bombeiro Civil', 1),
('Técnico em Farmácia', 1);

insert into turmas(id, inicio, curso_id) values
(1, '2022/06/01 19:00', 3),
(2, '2022/06/01 13:30', 4);

insert into alunos(id, nome, telefone, email, rg, cpf) values
(1, 'Lyan Morales', '(14) 996982353', 'drlyanmorales@gmail.com', '12 345 678-9', '123.456.789.01'),
(2, 'Ana Carolina Luiz dos Santos', '(14)991844360', 'anacarolinaluiz486@gmail.com', '457660090', '38429257861'),
(3, 'Victor Augusto de Almeida Silva', '996771741', 'victoraugustoas41@gmail.com', '12.345.678.10', '321.321.321.321');

insert into enderecos(id, aluno_id, logradouro, numero, complemento, bairro, cep, cidade, estado) values
(1, 1, 'Rua Machado de Assis', '46', 'Quadra 3', 'Estoril I', '17.014.040', 'Bauru', 'Sp'),
(2, 2, 'Rua Francisco do Rego Carranca', '4-90', null, 'Jd Vânia Maria', '17063-4900', 'Bauru', 'Sp'),
(3, 3, 'Rua Major fonseca osorio','543', null, 'Antartica', '17013-140', 'Bauru', 'Sp');

-- As tabelas que tem chaves estrangeiras e necessitam de outra tabela devem ser criadas após a tabela pai que possui a chave primaria