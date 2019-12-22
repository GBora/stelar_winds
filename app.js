var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var indexRouter = require('./view_layer/routes/index');
const galaxyRouter = require('./view_layer/routes/galaxy');
const solarSystemRouter = require('./view_layer/routes/solarSystem');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './view_layer/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/galaxy', galaxyRouter);
app.use('/solar_system', solarSystemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
