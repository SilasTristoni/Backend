const alunos = []

class Aluno {
    constructor(id, nome, idade) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    save() {
        alunos.push(this)
    }

    static fetchAll() {
        return alunos
    }
}

module.exports = Aluno
