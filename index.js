var createError = require('http-errors');
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var indexRouter = require('./routes/routes');

var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');

app.use(cors());
// view engine setup

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
var http = require('http').Server(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// catch 404 and forward to error handler

var server = app.listen(port);
console.log('Magic happens at http://localhost: ' + port);



module.exports = app;

