/**
 * Created by jeremycloutier on 1/17/16.
 */
var express = require('express');
var app = express();

app.use(express.static('server/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});