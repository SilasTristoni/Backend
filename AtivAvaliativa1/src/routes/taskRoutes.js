//rotas
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rotas
router.post('/', tarefaController.insert); // Criar nova tarefa
router.get('/', tarefaController.findAll); // Listar todas as tarefas
router.put('/:id', tarefaController.update); // Atualizar tarefa por ID
router.delete('/:id', tarefaController.delete); // Deletar tarefa por ID

