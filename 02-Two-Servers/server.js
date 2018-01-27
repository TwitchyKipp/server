var http = require("http");

var PORTone = 7000;
var PORTtwo = 7500;

function handleRequest(request, response) {

    response.end("It's ALIVE! Path Hit: " + request.url);
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

serverOne.listen(PORTone, function(){

    console.log("Server listening on: http://localhost:" + PORTone)
});

serverTwo.listen(PORTtwo, function(){

    console.log("Server listening on: http://localhost:" + PORTtwo)
});