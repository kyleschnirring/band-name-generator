var express = require('express');
var app = express();
var adjective = require('./adjective');
var noun = require('./noun');
var verb = require('./verb');
var rand = require('./randomWord');

app.use(express.static(__dirname + '/app/'));

var port = process.env.PORT || 3000;

var nounView = new noun.theNoun();
var verbView = new verb.theVerb();
var adjectiveView = new adjective.theAdjective();

console.log(typeof rand.gRWord);

app.listen(port, function () {
  console.log('server started on port 3000');
});

app.get("/", function (request, response) {
  response.sendFile('index.html');
});

app.get("/adjective", function (request, response) {
  response.json(rand.gRWord(adjectiveView));
});

app.get("/verb", function (request, response) {
  response.json(rand.gRWord(verbView));
});

app.get("/noun", function (request, response) {
  response.json(rand.gRWord(nounView));
});

















