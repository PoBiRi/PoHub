const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;
const db = require('./db.js');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () =>{
    console.log(`Server run : http://localhost:${PORT}/`);
})