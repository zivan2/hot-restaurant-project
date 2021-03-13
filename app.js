var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());