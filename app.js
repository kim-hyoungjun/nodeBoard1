var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello world puhahaha');
});

app.listen(3000, function(){
  console.log('server On nodemon!');
});
