
-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- INICIALIZAÇÃO BÁSICA --- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

use mysql;

set character_set_client = 'utf8';

drop database if exists supermercado;
create database supermercado;

use supermercado;

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- CRIANDO TABELAS --- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

-->>> #1

create table clientes(
    id int not null auto_increment primary key,
    cpf char(14),
    nome varchar(100),
    telefone varchar(15),
    rua varchar(100),
    numero varchar(10),
    cep char(9),
    bairro varchar(50),
    cidade varchar(100),
    estado char(2)
);

-->>> #2

create table atendentes(
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    usuario varchar(30) not null,
    senha varchar(40) not null
);

-->>> #3

create table supervisores(
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    senha varchar(40) not null,
    setor enum('açougue', 'hortifruti', 'estoque', 'padaria', 'produto', 'caixa') not null
);

-->>> #4

create table vendas(
    id int not null auto_increment primary key,
    cpf char(14),
    status enum('cancelada', 'em-processamento', 'finalizada') not null,
    valor_total decimal(7,3) not null,
    valor_total_pago decimal(7,3) not null,
    valor_troco decimal(6,3),
    nf boolean default 1 not null,
    data datetime not null,
    supervisor_id int not null,
    atendente_id int not null,
    cliente_id int not null
);

-->>> #5

create table produtos(
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    ean char(13) not null,
    preco varchar(50) not null
);

-->>> #6

create table venda_itens(
    id int not null auto_increment primary key,
    quantidade varchar(400) not null,
    venda_id int not null,
    produto_id int not null
);

-->>> #7

create table forma_pagamentos(
    id int not null auto_increment primary key,
    nome enum('cartao', 'dinheiro', 'outra-forma')
);

-->>> #8

create table pagamentos(
    id int not null auto_increment primary key,
    valor varchar(20),
    venda_id int not null,
    forma_pagamento_id int not null
);


-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- RELACIONAMENTOS --- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --


alter table vendas 
add constraint vendas_supervisor_fk foreign key (supervisor_id) references supervisores(id),
add constraint vendas_atendente_fk foreign key (atendente_id) references atendentes(id),
add constraint vendas_cliente_fk foreign key (cliente_id) references clientes(id);

alter table venda_itens
add constraint venda_itens_venda_id_fk foreign key (venda_id) references vendas(id),
add constraint venda_itens_produto_id_fk foreign key (produto_id) references produtos(id);

alter table pagamentos
add constraint pagamentos_venda_id_fk foreign key (venda_id) references vendas(id),
add constraint pagamentos_forma_pagamento_id_fk foreign key (forma_pagamento_id) references forma_pagamentos(id);


-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- INSERINDO DADOS --- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  

-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --
