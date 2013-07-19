var fs = require ('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buffer = fs.readFileSync('./index.html');

//var hello = buffer.toString('utf-8');
//console.log(hello);




response.send(buffer.toString('utf-8'));
///  response.send('Hello World 2!');


});





var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
