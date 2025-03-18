const Projeto = require('../models/projeto')  

class projetoController {
    static insert(req, res) {
        const { id, nome, descricao } = req.body  
        const projeto = new Projeto(id, nome, descricao)  
        projeto.save();
        res.status(201).json(projeto)  
    }
    static update(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body
        const projeto = Projeto.findById(Number(id))
        projeto.nome = nome
        projeto.descricao = descricao
        res.json(projeto)
    }
    static delete(req, res) {
        const { id } = req.params
        const projeto = Projeto.findById(Number(id))
        projeto.delete()
        res.json(projeto)
    }
    static findAll(req, res) {
        const projetos = Projeto.fetchAll()  
        res.json(projetos) 
    }
}

module.exports = projetoController
