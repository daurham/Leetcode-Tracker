// MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/leetcode', () => console.log('Running mongo..'));

const Entry = mongoose.model('Entry', 
  {
    name: String,
    difficulty: Number,
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

/* MongoDB CLI:
mongo
show databases
use [db name] 
show collections 
db.[collection].find() // select * in [table]
db.[collection].drop() // truncate [table]
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