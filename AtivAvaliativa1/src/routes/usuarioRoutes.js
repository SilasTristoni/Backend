const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rotas
router.post('/', usuarioController.insert);
router.get('/', usuarioController.findAll);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

module.exports = router;
