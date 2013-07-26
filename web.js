var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/font', express.static(__dirname + '/font'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/scss', express.static(__dirname + '/scss'));

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
