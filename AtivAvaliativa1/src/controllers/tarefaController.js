const Tarefa = require('../models/tarefa');

class tarefaController {
    // Inserir nova tarefa
    static async insert(req, res) {
        try {
            const { titulo, status, idProjeto, idUsuario } = req.body;

            if (!titulo || !status || !idProjeto || !idUsuario) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const tarefa = await Tarefa.create({ titulo, status, idProjeto, idUsuario });

            res.status(201).json(tarefa);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar tarefa', detalhes: error.message });
        }
    }

    // Listar todas as tarefas
    static async findAll(req, res) {
        try {
            const tarefas = await Tarefa.findAll();
            res.json(tarefas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar tarefas', detalhes: error.message });
        }
    }

    // Atualizar uma tarefa
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { titulo, status, idProjeto, idUsuario } = req.body;

            const tarefa = await Tarefa.findByPk(id);

            if (!tarefa) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            tarefa.titulo = titulo;
            tarefa.status = status;
            tarefa.idProjeto = idProjeto;
            tarefa.idUsuario = idUsuario;

            await tarefa.save();

            res.json(tarefa);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar tarefa', detalhes: error.message });
        }
    }

    // Deletar uma tarefa
    static async delete(req, res) {
        try {
            const { id } = req.params;

            const tarefa = await Tarefa.findByPk(id);

            if (!tarefa) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            await tarefa.destroy();

            res.json({ message: 'Tarefa deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar tarefa', detalhes: error.message });
        }
    }
}

module.exports = tarefaController;
