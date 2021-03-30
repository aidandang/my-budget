const mongooge = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({ path: './.env' });
const DB = process.env.DATABASE;

mongooge
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log('MongoDB server connected.');
  });

// start node.js server on a specified port.
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Node.js server listening at port: ${port}`)
);
