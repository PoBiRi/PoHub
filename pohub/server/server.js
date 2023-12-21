const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 4000;
const db = require('./db.js');

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/getSectionx', function(req, res){
    const {boardType} = req.body;
    const query = 'SELETE * FROM board WHERE board_type = ?';
    console.log(boardType);
    db.query(query, [boardType], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    })
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
});