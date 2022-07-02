//* PostgreSQL
const { Pool } = require('pg');
require('dotenv').config()

const {
  PSQL_USER_HOST, 
  PSQL_USER_NAME, 
  PSQL_USER_PASSWORD, 
  PSQL_USER_DATABASE 
} = process.env;
// console.log(PSQL_USER_DATABASE);

const pool = new Pool({
  host: `${PSQL_USER_HOST}`,
  user: `${PSQL_USER_NAME}`,
  database: `${PSQL_USER_DATABASE}`,
  port: 5432,
  password: `${PSQL_USER_PASSWORD}`,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

 module.exports = pool;

//*/


/* // MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/leetcode', () => console.log('Running mongo..'));

const Entry = mongoose.model('Entry', 
  {
    name: String,
    difficulty: String,
    promptLink: String,
    totalTime: String,
    promptCode: String,
    prompt: String,
    custom: Boolean,
    solution: String,
    readTime: String,
    whiteboardTime: String,
    psudocodeTime: String,
    codeTime: String,
    constraints: String,
    examples: [{}]
  });

module.exports = Entry;

//* MongoDB CLI:
mongo
show databases
use [db name] 
show collections 
db.[collection].find() // select * in [table]
db.[collection].drop() // truncate [table]
//* /
*/


/* MySQL
const mysql2 = require('mysql2');
const Promise = require('bluebird');
require('dotenv').config();

const connection = mysql2({
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.USER_DATABASE,
  host: process.env.USER_HOST,
});

module.exports = connection; 
*/
