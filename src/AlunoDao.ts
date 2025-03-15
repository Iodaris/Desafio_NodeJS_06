const { Client } = require('pg');

class AlunoDao {
    client: any;
    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: '5633123',
            port: 7000,
        });
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.end();
    }

    async insert(nome: any) {
        const query = 'INSERT INTO alunos (nome) VALUES ($1)';
        try {
            await this.client.query(query, [nome]);
            console.log(`Aluno ${nome} foi adicionado com sucesso!`);
        } catch (err) {
            console.error(`Erro ao adicionar o aluno ${nome}:`, err);
        }
    }
}

module.exports = AlunoDao;