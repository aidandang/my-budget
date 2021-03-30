const express = require('express');
const morgan = require('morgan');

const app = express();

const router = require('./router');

app.use(morgan('dev'));
router(app);

module.exports = app;
