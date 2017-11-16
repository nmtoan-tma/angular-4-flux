import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import index from './routes/index';
import users from './routes/users';
import cookieParser = require('cookie-parser');
const app: express.Express = express();

/* uncomment after placing your favicon in /public 
app.use(favicon(__dirname + '/public/favicon.ico')); */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);

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