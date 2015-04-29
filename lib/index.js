var Hapi = require('hapi');

//create server
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8082
});

server.register({register: require('hapi-reveal')}, function (err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.start();
    //console
    console.log("Presentation Started: " + server.info.uri);
    console.log("Hapi Version: "+server.version);

