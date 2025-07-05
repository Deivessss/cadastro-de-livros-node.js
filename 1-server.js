const express = require('express') 
const conexao = require('./2-database')
const app = express()
const port = 3000
const livros = []

/* Permite que o server receba JSON pelo req.body: */
app.use(express.json())

/* Página inicial da API: */
app.get('/', (req, res) => {
    res.send('API Cadastro de Livros')
})

/* Cadastrar novo livro: */
app.post('/livros', (req, res) => {
    const {nome, autor, editora} = req.body
    if (!nome || !autor || !editora) {
        res.status(400).json({erro: "Todos os campos são obrigatórios: nome, autor e editora."})
    } else {
        const query = 'INSERT INTO livros (nome, autor, editora) VALUES (?, ?, ?)'
        conexao.query(query, [nome, autor, editora], (erro, resultados) => {
            if (erro) {
                console.error({erro: erro})
                return res.status(500).json({erro: "Erro ao cadastrar o livro no banco de dados."})
            } else {
                const novoLivro = {
                    id: resultados.insertId,
                    nome: nome,
                    autor: autor,
                    editora: editora
                }
                res.status(201).json(novoLivro)
            }
        })
    }
})

/* Consultar todos os livros: */
app.get('/livros', (req, res) => {
    conexao.query("SELECT * FROM LIVROS", [], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            res.status(500).json({erro: "Não foi possível consultar os livros."})
        } else {
            res.status(200).json(resultados)
        }
    })
})

/* Consultar livro por ID: */
app.get('/livros/:id', (req, res) =>{
    const query = "SELECT * FROM LIVROS WHERE id = ?"
    conexao.query(query, [req.params.id], (erro, resultados) => {
        if (erro) {
            console.error({erro: erro})
            return res.status(500).json({erro: "Erro ao consultar o livro."})
        }
        if (resultados.length === 0) {
            return res.status(404).json({erro: "ID não encontrado."})
        } else {
            res.status(200).json(resultados[0])
        }
    })
})

/* Deletar livro por ID: */
app.delete('/livros/:id', (req, res) => {
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

/* Comando que inicia o servidor: */
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
