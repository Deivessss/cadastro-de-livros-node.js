# 📚 Cadastro de Livros

Sistema de cadastro de livros desenvolvido em JavaScript/Node.js, 
com uso de API EXPRESS e integração ao banco de dados MySQL.

---

📌Tecnologias utilizadas:
- JavaScript
- Node.js
- API rest
- MySQL
- Biblioteca/Framework: Express
- Biblioteca: mysql2

---

📌Funcionalidades:

- Cadastrar novo livro
- Consultar todos os livros cadastrados
- Consultar por ID
- Remover livro

---

📌Instruções para realizar testes usando o Insomnia:

  - Cadastrar novo livro: 
  Usar o método POST, e enviar no body um JSON com as informações 
  do livro: nome, autor e editora, na rota:
  http://localhost:3000/livros

  - Consultar todos os livros cadastrados:
  Usar o método GET na rota: 
  http://localhost:3000/livros

  - Consultar livro por ID: 
  Usar o método GET, e colocar o ID como parâmetro na rota. 
  Ex, se for id 99:
  http://localhost:3000/livros/99

  - Remover/excluir livro:
  Usar o método DELETE, e colocar o ID como parâmetro na rota.
  Ex, se for id 99:
  http://localhost:3000/livros/99

---

📌Instruções para ativar o banco de dados localmente:

  - Utilizar o arquivo database.sql já com os comandos prontos,
   para criar o banco de dados + tabela chamada livros, onde os dados ficarão armazenados.
