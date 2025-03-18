
const usuarios = []

class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    save() {
        usuarios.push(this)
    }

    static fetchAll() {
        return usuarios
    }
    static findById(id) {
        return usuarios.find(usuario => usuario.id == id)
    }
    static delete(id) {
        const index = usuarios.findIndex(usuario => usuario.id == id);
        if (index !== -1) {
            usuarios.splice(index, 1); 
        }
    }
}

module.exports = Usuario