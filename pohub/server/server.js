const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');
const db = require('./db.js');
const PORT = 4000;
const PageLimit = 12;

//app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: true,
    //origin: ['http://www.pobijunior.com', 'http://localhost:3000'],
    credentials: true,
})); //withCredentials
app.use(requestIp.mw());
app.use(express.static(path.join(__dirname, '../build')));

const dbOptions = {
    host: 'localhost',
    user: 'host',
    password: '1234',
    database: 'pohub',
    port: '3306',
};

const sessionStore = new MySQLStore(dbOptions);

app.use(
    session({
        httpOnly: true,
        /*secure: true,*/
        secret: "hello",
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            maxAge: 3600000,
            sameSite: 'lax',
            /*secure: true,
            sameSite: 'none',*/
        }
    })
);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/clientIp', function(req, res){
    const clientIp = req.clientIp;
    console.log('Client IP:', clientIp);
});

//로그인 요청
app.post('/reqLogin', function(req, res){
    const clientIp = req.clientIp;
    const {id, password} = req.body;
    const query = 'SELECT user_id, pw FROM user WHERE user_id = ? AND pw = ?';

    db.query(query, [id, password], (err, results) => {
        if(err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0){
                console.log('Logined User:', id, 'IP:', clientIp);
                if(!req.session.userId){
                    req.session.userId = id;
                    req.session.save();
                    console.log('set');
                }else{
                    console.log(req.session.userId);
                }
                res.json(true)
            } else {
                console.log('Logined Denied IP:', clientIp);
                res.json(false)
            }
        }
    });
});

//맞는 게시판 타입의 게시판들 검색
app.get('/getSectionx', function(req, res){
    const {boardType, pageNum} = req.query;
    const sn = (parseInt(pageNum) - 1) * PageLimit;
    const query = 'SELECT * FROM board WHERE board_type = ? LIMIT ?, ?';

    db.query(query, [boardType, sn, PageLimit], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
    //console.log('search boardType');
});

app.get('/countBoard', function(req, res){
    const {boardType} = req.query;
    const query = 'SELECT count(*) as max FROM board WHERE board_type = ?';

    db.query(query, [boardType], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(Math.trunc(results[0]['max']/PageLimit) + 1);
        }
    });
    //console.log('count Board');
});

//파일 다운로드
app.get('/DL/:fileName', function(req, res) {
    const clientIp = req.clientIp;
    const fileName = req.params.fileName;

    console.log('Client IP:', clientIp);
    res.download(path.join(__dirname, '../../../PoHub_Share', fileName));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
});