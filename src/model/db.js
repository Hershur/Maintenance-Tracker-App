const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectString = {
  user: 'postgres',
  host: 'localhost',
  database: 'maintenance_tracker',
  password: 'GREATNESS',
  port: 5000
};

const pool = new pg.Pool(connectString);

pool.on('connect', () => {});

const createRequestTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS
    requests(id SERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        request VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        state ENUM ('Pending...', 'Completed') NOT NULL)`;
  try {
    await pool.query(queryText);
    console.log('Requests Table Created..');
  } catch (e) {
    console.log(e);
  }
};

createRequestTable();

const createUsersTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS 
    users(id SERIAL PRIMARY KEY,
      name VARCHAR(128) NOT NULL,
      email VARCHAR(128) NOT NULL,
      password VARCHAR(64) NOT NULL,
      phone_number INT,     
      date DATE NOT NULL)`;

  try {
    await pool.query(queryText);
    console.log('Users Table created...');
  } catch (e) {
    console.log(e);
  }
};

createUsersTable();

module.exports = pool;
