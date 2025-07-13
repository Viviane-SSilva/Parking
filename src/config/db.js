import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const clientDB = new Client({
    connectionString: process.env.DATABASE_URL,
});
clientDB.connect()
    .then(() => console.log('Banco de dados conectado com sucesso!'))
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        process.exit(1);
    });

export { clientDB };


