const Aluno = require('../models/aluno')  

class alunoController {
    static insert(req, res) {
        const { id, nome, idade } = req.body  

        const aluno = new Aluno(id, nome, idade)  

        res.status(201).json(aluno)  
    }

    static findAll(req, res) {
        const alunos = Aluno.fetchAll()  

        res.json(alunos) 
    }
}

module.exports = alunoController
