const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cadastro_de_livros"
})

conexao.connect((erro) => {
    if (erro){
        console.error("Erro ao conectar ao banco:", erro)
        return
    }
    console.log("Conectado ao banco de dados MySQL!")
})

/* Modularização: */
module.exports = conexao