// server.js

var express = require('express');
var app = express();
var path = require('path');

var indexPath = path.join(__dirname + '/index.html');
var port = process.env.PORT || 5000;   

app.get('/', function(req, res) {
    res.sendFile(indexPath);
});

app.listen(port);