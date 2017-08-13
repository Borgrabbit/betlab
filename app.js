
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var attend = require('./routes/attend');
var battle = require('./routes/battle');
var bodydata = require('./routes/bodydata');
var fb_signin = require('./routes/fb_signin');
var gym = require('./routes/gym');
var inbody = require('./routes/inbody');
var mainpage = require('./routes/mainpage');


var port = 3001;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/attend', attend);
app.use('/battle', battle);
app.use('/bodydata', bodydata);
app.use('/fb_signin', fb_signin);
app.use('/gym', gym);
app.use('/inbody', inbody);
app.use('/mainpage', mainpage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//require('./routes/serverRoute')(app);
app.listen(port);
console.log('Server Started, Port : 3001');

module.exports = app;
