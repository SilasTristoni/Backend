const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET_KEY = 'segredo_batata'; // Coloque isso em variável de ambiente em produção

class usuarioController {
    // Registro de novo usuário
    static async register(req, res) {
        try {
            const { nome, email, senha } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
            }

            const senhaHash = await bcrypt.hash(senha, saltRounds);
            const novoUsuario = await Usuario.create({ nome, email, senha: senhaHash });

            res.status(201).json({ message: 'Usuário criado com sucesso', usuario: novoUsuario });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao registrar usuário', detalhes: error.message });
        }
    }

    // Login
    static async login(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ error: 'Email e senha são obrigatórios' });
            }

            const usuario = await Usuario.findOne({ where: { email } });

            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);

            if (!senhaValida) {
                return res.status(401).json({ error: 'Senha inválida' });
            }

            const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET_KEY, {
                expiresIn: '1h'
            });

            res.json({ message: 'Login realizado com sucesso', token });
        } catch (error) {
            res.status(500).json({ error: 'Erro no login', detalhes: error.message });
        }
    }

    // Outros métodos (findAll, update, delete) permanecem aqui...
}

module.exports = usuarioController;
