const express = require('express') 
const conexao = require('./2-database')
const app = express()
const port = 3000

/* Permite que o server receba JSON pelo req.body: */
app.use(express.json())

/* Página inicial da API: */
app.get("/", (req, res) => {
    res.send("API Cadastro de Livros")
})

/* Cadastrar novo livro: */
app.post("/livros", (req, res) => {
    const {nome, autor, editora} = req.body
    if (!nome || !autor || !editora) {
        res.status(400).json({erro: "Todos os campos são obrigatórios: nome, autor e editora."})
    } else {
        const query = "INSERT INTO livros VALUES (DEFAULT, ?, ?, ?)"
        conexao.query(query, [nome, autor, editora], (erro, resultados) => {
            if (erro) {
                console.error({erro: erro})
                return res.status(500).json({erro: "Erro interno do servidor."})
            } else {
                const novoLivro = {id: resultados.insertId, nome: nome, autor: autor, editora: editora}
                return res.status(201).json(novoLivro)
            }
        })
    }
    
})

/* Consultar todos os livros: */
app.get("/livros", (req, res) => {
    conexao.query("SELECT * FROM LIVROS", [], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Não foi possível consultar os livros."})
        } else {
            return res.status(200).json(resultados)
        }
    })
})

/* Consultar livro por Autor: */
app.get("/livros/autor/:autor", (req, res) => {
    conexao.query("SELECT * FROM livros WHERE autor = ?", [req.params.autor], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Erro interno do servidor."})
        }
        if (resultados.length === 0) {
            return res.status(404).json({erro: "Nenhum livro encontrado com esse autor."})
        } else {
            return res.status(200).json(resultados)
        }
    })
})

/* Consultar livro por ID: */
app.get("/livros/:id", (req, res) => {
    conexao.query("SELECT * FROM livros WHERE ID = ?", [req.params.id], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Erro interno do servidor."})
        } 
        if (resultados.length === 0) {
            return res.status(404).json({erro: "Nenhum livro encontrado com esse ID."})
        } else {
            return res.status(200).json(resultados[0])
        }
    })
})

/* Deletar livro por ID: */
app.delete("/livros/:id", (req, res) => {
    const query = "DELETE FROM livros WHERE id = ?"
    conexao.query(query, [req.params.id], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Não foi possível deletar o livro."})
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({erro: "Nenhum livro encontrado com esse ID."})
        }
        res.status(200).json({mensagem: `Livro de ID ${req.params.id} deletado com sucesso.`})
    })
})

/* Atualizar livros por ID: */
app.put("/livros/:id", (req, res) => {
    const {nome, autor, editora} = req.body
    if (!nome || !autor || !editora) {
        return res.status(400).json({erro: "Todos os campos são obrigatórios: nome, autor e editora."})
    }
    const query = "UPDATE livros SET nome = ?, autor = ?, editora = ? WHERE id = ?"
    conexao.query(query, [nome, autor, editora, req.params.id], (erro, resultados) => {
        if(erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Erro interno do servidor."})
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({erro: "Nenhum livro encontrado com esse ID."})
        }
        const novoLivro = {id: req.params.id, nome: nome, autor: autor, editora: editora}
        return res.status(200).json({sucesso: `Livro de ID ${req.params.id} atualizado com sucesso.`, novoLivro: novoLivro})
    })
})

/* Comando que inicia o servidor: */
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})