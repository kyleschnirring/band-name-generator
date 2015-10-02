var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app/'));

var port = process.env.PORT || 3000;

function Adjective() {
  this.happy = true;
  this.sad = true;
  this.mad = true;
  this.jumping = true;
};

function Noun() {
  this.squirrel = true;
  this.weinerDogs = true;
  this.fingerNail = true;
  this.eggMcMuffin = true;
};

function Verb() {
  this.running = true;
  this.swimming = true;
  this.canoeing = true;
  this.gambling = true;
  this.driving = true;
};

var nounView = new Noun();
var verbView = new Verb();
var adjectiveView = new Adjective();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor((Math.random() * propArray.length))];
  return {word: randomProp};
}

app.listen(port, function () {
  console.log('server started on port 3000');
});

app.get("/", function (request, response) {
  response.sendFile('index.html');
});

app.get("/adjective", function (request, response) {
  response.json(getRandomWord(adjectiveView));
});

app.get("/verb", function (request, response) {
  response.json(getRandomWord(verbView));
});

app.get("/noun", function (request, response) {
  response.json(getRandomWord(nounView));
});









