const express = require('express');
const logger = require('./logger');
const app = express()
const port = 4000;
const options = {
   index : "home.html"
}
app.use(logger)
app.use(express.static(__dirname + '/assets'))
app.use(express.static(__dirname + '/views', options))
app.listen(port, (err) => {
   err ? console.log(err) :
   console.log('The server is running, ' + ' please, open your browser at http://localhost:%s', port);});