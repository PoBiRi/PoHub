const mysql = require('mysql');

//웹 호스팅용

const db = mysql.createConnection({
    host: '220.120.65.148',
    user: 'host',
    password: '1234',
    database: 'pohub',
    port:'3306'
});
//로컬 환경
/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'termproject',
    port:'3306'
});*/

db.connect((error, result) => {
    if (error) console.log(error);
});

module.exports = db;
