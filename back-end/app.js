const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi there, from Monthly Budget API')
})

module.exports = app