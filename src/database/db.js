const databaseName = 'todos';
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`;

const pgp = require('pg-promise')();

const db = pgp(connectionString);

module.exports = db;
