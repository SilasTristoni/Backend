const Usuario = require('../models/usuario')  

class usuarioController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body  
        const usuario = new Usuario(id, nome, email, senha)  
        usuario.save();
        res.status(201).json(usuario)
    }

    static findAll(req, res) {
        const usuarios = Usuario.fetchAll()  

        res.json(usuarios) 
    }
    static update(req, res) {
        const { id } = req.params
        const { nome, email, senha } = req.body
        const usuario = Usuario.findById(Number(id))
        usuario.nome = nome
        usuario.email = email
        usuario.senha = senha
        res.json(usuario)
    }
    static delete(req, res) {
        const { id } = req.params;
        const usuario = Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        Usuario.delete(id); 
        res.json({ message: 'Usuário deletado com sucesso' });
    }
}

module.exports = usuarioController
