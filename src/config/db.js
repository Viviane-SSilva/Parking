const { db } = require("pg");
require("dotenv").config();

const client = new db.Client({
    connectionString: process.env.DATABASE_URL,
});
client.connect();
module.exports = client;