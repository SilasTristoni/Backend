const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database');

// Define o modelo Tarefa com Sequelize
const Tarefa = database.db.define('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idProjeto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tarefas' // força o nome da tabela no banco (opcional)
});

// Exporta o modelo para uso em controllers e rotas
module.exports = Tarefa;
