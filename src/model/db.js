const pg = require('pg');
const dotenv = require('d');

dotenv
const connectString = {
  user: 'postgres',
  host: 'localhost',
  database: 'maintenance_tracker',
  password: 'GREATNESS',
  port: 5000
};

const pool = new pg.Pool(connectString);


pool.on('connect', () => {});

const createTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    requests(id SERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        request VARCHAR(256) NOT NULL,
        date DATE NOT NULL,
        status BOOLEAN NOT NULL)`;
  try {
    await pool.query(queryText);
    console.log('Table Created..');
  } catch (e) {
    console.log(e);
  }
};

createTable();

module.exports = pool;
