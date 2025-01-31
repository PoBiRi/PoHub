const mysql = require('mysql');
require('dotenv').config();

//웹 호스팅용
const db = mysql.createConnection({
    host: 'localhost',
    user: 'host',
    password: '1234',
    database: 'pohub',
    charset: 'utf8mb4',
    port: process.env.DB_PORT
});

const sessionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'pohub',
    port: process.env.DB_PORT
});

// MySQL 재연결 함수
function handleDisconnect(connection) {
    connection.on('error', function(err) {
        console.error('MySQL error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Attempting to reconnect to MySQL...');
            handleDisconnect(connection);
        } else {
            console.log(err.code);
            throw err;
        }
    });
}

handleDisconnect(db);
handleDisconnect(sessionDB);
/*
db.connect((error, result) => {
    if (error) console.log(error);
});

sessionDB.connect((error, result) => {
    if (error) console.log(error);
});
*/
module.exports = {db, sessionDB};