import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import index from './routes/index';
import users from './routes/users';

import cookieParser = require('cookie-parser');
const app: express.Express = express();

/* configure jade */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* uncomment after placing your favicon in /public 
app.use(favicon(__dirname + '/public/favicon.ico')); */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/users/:id', users);

/* catch 404 and forward to error handler */
app.use((req, res, next) => {
  var err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* error handlers
 development error handler
 will print stacktrace */
if (app.get('env') === 'development') {
  app.use((error: any, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

/* production error handler
 no stacktraces leaked to user */
app.use((error: any, req, res, next) => {
  res.status(error.status || 500);
  res.render('error', {
    message: error.message,
    error: {}
  });
  return null;
});


export default app;