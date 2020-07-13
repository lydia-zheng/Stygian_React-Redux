var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users'); in class example
const database = require('./database');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.disable('etag'); //disable entity tags to avoid 304?Caching issues




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



//used to populate the database with messages.Don't uncomment unless messages need to be readded to db!
 
/* const populateMessages = require("./scripts/populateMessages");
populateMessages(); */


//database:
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
