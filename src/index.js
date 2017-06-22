const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// compress all responses
app.use(compression());

const routes = require('./routes/routes')

/* CORS middleware */
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//load the routes function
routes(app);

app.listen(app.get('port'), () => {
    console.log("Api is running at localhost:" + app.get('port'))
})
