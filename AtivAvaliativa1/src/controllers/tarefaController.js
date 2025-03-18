const Tarefa = require('../models/tarefa')  

class tarefaController {
    static insert(req, res) {
        const { id, titulo, status, idProjeto, idUsuario } = req.body  
        const tarefa = new Tarefa(id, titulo, status, idProjeto, idUsuario)  
        tarefa.save();
        res.status(201).json(tarefa)
    }

    static findAll(req, res) {
        const tarefas = Tarefa.fetchAll()  

        res.json(tarefas) 
    }
    static update(req, res) {
        const { id } = req.params
        const { titulo, status, idProjeto, idUsuario } = req.body
        const tarefa = Tarefa.findById(Number(id))
        tarefa.titulo = titulo
        tarefa.status = status
        tarefa.idProjeto = idProjeto
        tarefa.idUsuario = idUsuario
        res.json(tarefa)
}
    static delete(req, res) {
        const { id } = req.params
        const tarefa = Tarefa.findById(Number(id))
        tarefa.delete()
        res.json(tarefa)
    }
}

module.exports = tarefaController
