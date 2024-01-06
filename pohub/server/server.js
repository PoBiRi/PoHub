const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');
const {db, sessionDB} = require('./db.js');
require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const PageLimit = 15;

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

const sessionStore = new MySQLStore({
    clearExpired: true,
    checkExpirationInterval: 1200000,
    expiration: 3600000,
}, sessionDB);

app.use(
    session({
        httpOnly: true,
        secret: process.env.COOKIE_SECRET,
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

app.get('/isLoggedIn', function(req, res) {
    if(!req.session.isLoggedIn){
        res.json(false);
    } else {
        res.json(true);
    }
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
                console.log('Logged In User:', id, 'IP:', clientIp);
                //세션 저장
                req.session.userId = id;
                req.session.isLoggedIn = true;
                req.session.save();
                res.json(true);
            } else {
                console.log('Logged In Denied IP:', clientIp);
                res.json(false);
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

//게시판의 페이지 검색
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

//게시판 불러오기
app.get('/getBoard', function(req, res){
    const {boardID} = req.query;
    const query = 'SELECT * FROM board WHERE board_id = ?';
    
    db.query(query, [boardID], (err, results) => {
        if(err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

//게시판 파일 불러오기
app.get('/getFile', function(req, res){
    const {boardID} = req.query;
    const query = 'SELECT file_dir, file_type FROM file WHERE board_id = ?';
    
    db.query(query, [boardID], (err, results) => {
        if(err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

//파일 다운로드
app.get('/DL/:fileName', function(req, res) {
    const clientIp = req.clientIp;
    const fileName = req.params.fileName;

    console.log('Client IP:', clientIp);
    res.download(path.join(__dirname, '../../../PoHub_Share', fileName));
});

//이미지 서비스
app.get('/img/:fileName', function(req, res) {
    const fileName = req.params.fileName;

    res.sendFile(path.join(__dirname, '../../../PoHub_Share/img', fileName));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
});