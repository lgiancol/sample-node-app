var app = require('./app');
var http = require('http');
var nconf = require('nconf');

var port = nconf.get('port');
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
