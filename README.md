# CrudReactJs_AspNetCore

# Projeto desenvolvido para estudo, utilizando ReactJs no front-end, Asp Net Core no back-end e PostgreSql no banco de dados

# Pacotes do Reactjs

> 1. redux
> 2. redux-saga
> 3. redux-persist
> 4. react-router-dom
> 5. semantic-ui-react
> 6. prop-types
> 7. axios
> 8. history

# Pacotes do Asp Net Core

> Microsoft.AspNetCore.Mvc.NewtonsoftJson
> Microsoft.EntityFrameworkCore
> Microsoft.EntityFrameworkCore.Tools
> Microsoft.Extensions.configuration.Json
> Newtonsoft.Json
> Npgsql.entityFrameworkCore.PostgreSQL
> System.Linq.Expressions

# Banco de Dados PostgreSql

- Estrutura:

- Banco Criado:

> CREATE DATABASE Catalogo

- Tabelas Criadas:

> CREATE TABLE Categorias(
	CategoriaId serial primary key,
   	Nome varchar(80) not null,
    ImagemUrl varchar(500) not null	
);

> CREATE TABLE Produtos(
	ProdutoId serial primary key,
   	Nome varchar(80) not null,
    Descricao varchar(300) not null,
    Preco real not null,
	ImagemUrl varchar(500) not null,
	Estoque int not null,
	DateTime date not null,
	CategoriaId  int not null,
	foreign key(CategoriaId) REFERENCES Categorias(CategoriaId)
);

- Dados inseridos como exemplo:

> INSERT INTO Categorias(nome, imagemurl)
VALUES
('Bebibas', 'http://www.macoratti.net/Imagens/1.jpg'),
('Lanches',	'http://www.macoratti.net/Imagens/2.jpg'),
('Sobremesas', 'http://www.macoratti.net/Imagens/3.jpg');

> Insert INTO Produtos(nome, descricao, preco, imagemurl, estoque, datetime, categoriaid)
VALUES
('Coca-Cola Diet', 'Refrigerante de Cola', 5.4, 'http://www.macoratti.net/Imagens/coca.jpg', 50, '2020-06-24', 	1),
('Lanche de Atum', 'Lanche de Atum com Maionese', 8.5, 'http://www.macoratti.net/Imagens/atum.jpg', 10, '2020-06-24', 2),
('Pudim 100g', 'Pudim de Leite Condensado 100g', 6.75, 'http://www.macoratti.net/Imagens/pudim.jpg', 20, '2020-06-24', 3);
