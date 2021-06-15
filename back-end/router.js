const accountRouter = require('./routes/accountRoutes');
const userRouter = require('./routes/userRoutes');

module.exports = function (app) {
  app.use('/accounts', accountRouter);
  app.use('/users', userRouter);
};
