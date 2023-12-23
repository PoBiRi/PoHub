const mysql = require('mysql');

//웹 호스팅용
const db = mysql.createConnection({
    host: '211.226.0.207',
    user: 'host',
    password: '1234',
    database: 'pohub',
    port:'3306'
});

db.connect((error, result) => {
    if (error) console.log(error);
});

module.exports = db;