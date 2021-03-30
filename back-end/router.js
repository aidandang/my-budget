module.exports = function (app) {
  app.get('/', (req, res, next) => {
    res.send('Hi there, from Monthly Budget API');
  });
};
