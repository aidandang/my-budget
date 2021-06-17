const userRouter = require('./routes/userRoutes');

module.exports = function (app) {
  app.use('/users', userRouter);
};
