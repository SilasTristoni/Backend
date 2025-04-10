const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database');

// Define o modelo Usuario com Sequelize
const Usuario = database.db.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios' // Define o nome da tabela explicitamente (opcional)
});

// Exporta o modelo para uso em controllers e rotas
module.exports = Usuario;
