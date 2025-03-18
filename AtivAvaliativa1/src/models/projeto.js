const projetos = []

class Projeto {
    constructor(id, nome, descricao) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    save() {
        projetos.push(this)
    }

    static fetchAll() {
        return projetos
    }
    static findById(id) {
        return projetos.find(projeto => projeto.id == id)
    }
    static delete(id) {
        const index = projetos.findIndex(projeto => projeto.id == id);
        if (index !== -1) {
            projetos.splice(index, 1); 
        }
    }
}

module.exports = Projeto