const auth = require('./controllers/authController');

module.exports = function (app) {
  app.post('/signup', auth.signup);
};
