var http = require('http');
var fs = require('fs');
//var log = require('./modules/my-log')
var {info,error} = require('./modules/my-log');
var {countries} = require('countries-list');
var url = require('url');
var querystring = require('querystring');


var server = http.createServer(function (request, response) {

var parsed = url.parse(request.url);
console.log('parsed',parsed);
var pathname = parsed.pathname;
var query = querystring.parse(parsed.query);
console.log(query);


/*Inicio Contenido */
    if (pathname === "/") {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("<html><body><p>HOME PAGE</p></body></html>");
        response.end();
    } else if (pathname === "/country") {
        response.writeHead(200, {
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
        response.write("<html><body><p>Página no encontrada</p></body></html>");
        response.end()

    }

 /*Fin Contenido */
});

server.listen(4000);
console.log('runnimg');