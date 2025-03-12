/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

const readlineSync = require('readline-sync');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '5633123',
    port: 7000,
});

async function adicionarAlunos() {
    try {
        await client.connect();

        const quantidade = readlineSync.questionInt('Quantos alunos deseja adicionar? ');

        if (isNaN(quantidade) || quantidade <= 0) {
            console.error('Por favor, insira um número válido.');
            return;
        }

        for (let i = 0; i < quantidade; i++) {
            const nome = readlineSync.question(`Digite o nome do aluno ${i + 1}: `);
            if (!nome.trim()) {
                console.error('Nome inválido. Por favor, tente novamente.');
                i--;
                continue;
            }

            const query = 'INSERT INTO alunos (nome) VALUES ($1)';
            try {
                await client.query(query, [nome]);
                console.log(`Aluno ${nome} foi adicionado com sucesso!`);
            } catch (err) {
                console.error(`Erro ao adicionar o aluno ${nome}:`, err);
            }
        }
    } catch (err) {
        console.error('Erro ao salvar no banco de dados:', err);
    } finally {
        await client.end();
    }
}

adicionarAlunos();

});