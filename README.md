# 📚 Cadastro de Livros

Sistema de cadastro de livros desenvolvido em JavaScript/Node.js, 
com uso de API EXPRESS e integração ao banco de dados MySQL.

---

### 📌Tecnologias utilizadas:
- JavaScript
- Node.js
- API REST
- MySQL
- Biblioteca/Framework: Express
- Biblioteca: mysql2

---

### 📌Funcionalidades:

- Cadastrar novo livro
- Consultar todos os livros cadastrados
- Consultar por autor
- Consultar por ID
- Atualizar por ID
- Remover livro

---

#### 📌 Antes de utilizar:
- No terminal, use o comando `npm install`, para instalar todas as bibliotecas/pacotes/frameworks necessários. O NPM (Node Package Manager) já saberá quais pacotes instalar, devido ao arquivo `package.json`.

---

### 📌Instruções para realizar testes usando o Insomnia:

#### ° Cadastrar novo livro:

 - **Método**: POST  
 - **Rota**: http://localhost:3000/livros  
 - **Body**: enviar um JSON com as informações 
   do livro:
  ```
  {
  "nome": "Nome do livro"
  "autor": "Autor do livro"
  "editora": "Editora do livro"
  }
  ```
##  
#### ° Consultar todos os livros cadastrados:
 - **Método**: GET  
 - **Rota**: http://localhost:3000/livros
##  
#### ° Consultar livro por ID:
 - **Método**: GET  
 - **Rota**: Colocar o ID como parâmetro na rota/url: localhost:3000/livros/[id]  
  Exemplo, se for id 99: http://localhost:3000/livros/99  
##  
#### ° Remover/excluir livro:
 - **Método**: DELETE  
 - **Rota**: Colocar o ID como parâmetro na rota/url: localhost:3000/livros/[id]  

---

### 📌Instruções para ativar o banco de dados:

  - Utilizar o arquivo `database.sql` que já está com os comandos prontos,
   para criar o banco de dados + tabela chamada livros, onde os dados ficarão armazenados.
