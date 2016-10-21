// server.js

var express = require('express');
var app = express();
//var os = require('os');

var port = process.env.PORT || 5002;   

app.get('/', function(req, res) {
    res.json('Executing RatingsApi version 1.0 - Host name : ');
});

// start the app
app.listen(port);