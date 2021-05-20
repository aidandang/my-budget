const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const firebaseAuthController = require('./controllers/firebaseAuthController');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

const router = require('./router');

app.use(morgan('dev'));
app.use(bodyParser.json());

// firebase authentication
// app.use('/', firebaseAuthController.protect);

router(app);

// all other routes are not found
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server.`, 404));
});

// run global error handler at the end of the stack
app.use(globalErrorHandler);

module.exports = app;
