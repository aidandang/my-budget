const app = require('./app')


// start node.js server on a specified port.
const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Node.js server listening at port: ${port}`));