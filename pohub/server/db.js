const mysql = require('mysql');
require('dotenv').config();
/*
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
*/
//웹 호스팅용
const db = mysql.createPool({
    host: 'localhost',
    user: 'host',
    password: '1234',
    database: 'pohub',
    charset: 'utf8mb4',
    port: process.env.DB_PORT
});

const sessionDB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'pohub',
    port: process.env.DB_PORT
});

// 쿼리를 실행하는 함수 (자동 연결/해제)
function queryDatabase(pool, sql, params = []) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('MySQL 연결 오류:', err);
                return reject(err);
            }
            connection.query(sql, params, (error, results) => {
                connection.release(); // 연결 반환
                if (error) return reject(error);
                resolve(results);
            });
        });
    });
}

/*
db.connect((error, result) => {
    if (error) console.log(error);
});

sessionDB.connect((error, result) => {
    if (error) console.log(error);
});
*/
module.exports = {db, sessionDB, queryDatabase};