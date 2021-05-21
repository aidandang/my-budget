const accountRouter = require('./routes/accountRoutes');

module.exports = function (app) {
  app.use('/accounts', accountRouter);
};
