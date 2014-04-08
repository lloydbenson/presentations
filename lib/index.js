var Hapi = require('hapi');

//create server
var server = Hapi.createServer('localhost',8080, { cors: true });

//redirect / to the html dir
var home = {
    handler: function (request, reply) {
        reply().redirect('/html');
    }
};

// directory mapping
var html = { handler: { directory: { listing: true, index: false, path: './html' } } };
var css = { handler: { directory: { listing: false, index: false, path: './node_modules/reveal.js/css' } } };
var lib = { handler: { directory: { listing: false, index: false, path: './node_modules/reveal.js/lib' } } };
var js = { handler: { directory: { listing: false, index: false, path: './node_modules/reveal.js/js' } } };
var plugin = { handler: { directory: { listing: false, index: false, path: './node_modules/reveal.js/plugin' } } };

// routes
server.route({ method : 'GET', path : '/', config : home });
server.route({ method : 'GET', path : '/html/{path*}', config : html });
server.route({ method : 'GET', path : '/css/{path*}', config : css });
server.route({ method : 'GET', path : '/lib/{path*}', config : lib });
server.route({ method : 'GET', path : '/plugin/{path*}', config : plugin });
server.route({ method : 'GET', path : '/js/{path*}', config : js });

//startup server
server.start();

//console
console.log("Presentation Started");
console.log("Hapi Version: "+Hapi.utils.version());
//console.log("Dumping the server table object")
//console.log(server.table());
