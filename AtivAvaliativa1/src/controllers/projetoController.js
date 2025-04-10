const Projeto = require('../models/projeto');

class projetoController {
    // Inserir novo projeto
    static async insert(req, res) {
        try {
            const { nome, descricao } = req.body;

            if (!nome || !descricao) {
                return res.status(400).json({ error: 'Nome e descrição são obrigatórios' });
            }

            const projeto = await Projeto.create({ nome, descricao });
            res.status(201).json(projeto);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar projeto', detalhes: error.message });
        }
    }

    // Atualizar projeto
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;

            const projeto = await Projeto.findByPk(id);

            if (!projeto) {
                return res.status(404).json({ error: 'Projeto não encontrado' });
            }

            projeto.nome = nome;
            projeto.descricao = descricao;

            await projeto.save();

            res.json(projeto);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar projeto', detalhes: error.message });
        }
    }

    // Deletar projeto
    static async delete(req, res) {
        try {
            const { id } = req.params;

            const projeto = await Projeto.findByPk(id);

            if (!projeto) {
                return res.status(404).json({ error: 'Projeto não encontrado' });
            }

            await projeto.destroy();

            res.json({ message: 'Projeto deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar projeto', detalhes: error.message });
        }
    }

    // Listar todos os projetos
    static async findAll(req, res) {
        try {
            const projetos = await Projeto.findAll();
            res.json(projetos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar projetos', detalhes: error.message });
        }
    }
}

module.exports = projetoController;
