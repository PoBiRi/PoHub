const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 4000;
const db = require('./db.js');

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//맞는 게시판 타입의 게시판들 검색
app.get('/getSectionx', function(req, res){
    const {boardType} = req.query;
    const query = 'SELECT * FROM board WHERE board_type = ?';

    db.query(query, [boardType], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    })
});

//파일 다운로드
app.get('/DL/:fileName', function(req, res) {
    const fileName = req.params.fileName;

    res.download(path.join(__dirname, '../../../PoHub_Share', fileName));
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
});