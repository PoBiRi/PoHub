const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 4000;
const db = require('./db.js');
const requestIp = require('request-ip');
const PageLimit = 12;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(requestIp.mw());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/clientIp', function(req, res){
    const clientIp = req.clientIp;
    console.log('Client IP:', clientIp);
})

app.post('/reqLogin', function(req, res){
    const clientIp = req.clientIp;
    const {id, password} = req.body;
    console.log('Login Request IP:', clientIp);
    const query = 'SELECT user_id, pw FROM user WHERE user_id = ? AND pw = ?';

    db.query(query, [id, password], (err, results) => {
        if(err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0){
                res.json(true)
            } else {
                res.json(false)
            }
        }
    });
})

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
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
});