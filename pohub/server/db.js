const mysql = require('mysql');
require('dotenv').config();

//웹 호스팅용
const db = mysql.createConnection({
    host: 'localhost',
    user: 'host',
    password: '1234',
    database: 'pohub',
    port: process.env.DB_PORT
});

const sessionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'pohub',
    port: process.env.DB_PORT
});

db.connect((error, result) => {
    if (error) console.log(error);
});

sessionDB.connect((error, result) => {
    if (error) console.log(error);
});

module.exports = {db, sessionDB};