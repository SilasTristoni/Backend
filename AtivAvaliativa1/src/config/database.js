const { Sequelize } = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'NomeDoBanco',     // nome do banco
            'usuario_sql',     // nome do usuário
            'senha_sql',       // senha
            {
                host: 'localhost',
                dialect: 'mssql',       // aqui troca para mssql
                dialectOptions: {
                    options: {
                        encrypt: false,  // ou true, se estiver usando Azure ou segurança extra
                        trustServerCertificate: true // necessário em localhost geralmente
                    }
                },
                define: {
                    timestamps: false // caso não queira timestamps automáticos
                }
            }
        );
    }
}

module.exports = new Database();
