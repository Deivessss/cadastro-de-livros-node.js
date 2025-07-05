CREATE DATABASE IF NOT EXISTS cadastro_de_livros
DEFAULT CHARACTER SET utf8mb4  
DEFAULT COLLATE utf8mb4_general_ci; 

CREATE TABLE IF NOT EXISTS livros(
id INT AUTO_INCREMENT,
nome VARCHAR(30),
autor VARCHAR(30),
editora VARCHAR(30),
PRIMARY KEY (id)
)DEFAULT CHARSET = utf8mb4;

USE cadastro_de_livros;