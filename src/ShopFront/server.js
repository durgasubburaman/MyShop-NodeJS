// server.js

var express = require('express');
var app = express();
var path = require('path');

var indexPath = path.join(__dirname + '/index.html');
var port = process.env.PORT || 5000;   

// when user GET / return the index.html file
app.get('/', function(req, res) {
    res.sendFile(indexPath);
});

// start the app
app.listen(port);