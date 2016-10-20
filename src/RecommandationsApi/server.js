// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var os = require('os');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5003;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json('Executing Recommandations version 1.0 - Host name : ' + os.hostname());   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api/recommandations
app.use('/api/recommandations', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port ' + port);