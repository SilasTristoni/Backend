const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database');

// Define o modelo diretamente, sem construtor
const Projeto = database.db.define('Projeto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING
    }
});

// Exporta o modelo para ser usado em controllers e rotas
module.exports = Projeto;
