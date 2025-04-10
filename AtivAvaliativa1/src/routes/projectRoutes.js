const express = require('express');
const router = express.Router();
const projetoController = require('../controllers/projetoController');

// rotas

router.post('/', projetoController.insert); // Criar novo projeto
router.get('/', projetoController.findAll); // Listar todos os projetos
router.put('/:id', projetoController.update); // Atualizar projeto por ID
router.delete('/:id', projetoController.delete); // Deletar projeto por ID  