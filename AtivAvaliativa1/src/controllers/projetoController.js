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
        const { id } = req.params;
        const projeto = Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }
        Projeto.delete(id); 
        res.json({ message: 'Projeto deletado com sucesso' });
    }
    static findAll(req, res) {
        const projetos = Projeto.fetchAll()  
        res.json(projetos) 
    }
}

module.exports = projetoController
