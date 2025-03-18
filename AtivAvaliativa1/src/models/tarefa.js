const tarefas = []

class Tarefa {
    constructor(id, titulo, status, idProjeto, idUsuario) {
        this.id = id
        this.titulo = titulo
        this.status = status
        this.idProjeto = idProjeto
        this.idUsuario = idUsuario
    }

    save() {
        tarefas.push(this)
    }

    static fetchAll() {
        return tarefas
    }
    static findById(id) {
        return tarefas.find(tarefa => tarefa.id == id)
    }
    static delete(id) {
        const index = tarefas.findIndex(tarefa => tarefa.id == id);
        if (index !== -1) {
            tarefas.splice(index, 1); 
        }
    }
}

module.exports = Tarefa