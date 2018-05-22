let http = require('http');
let config_express = require('./config/express');

let app = config_express();
http.createServer(app)
    .listen(app.get('port'), function () {
        console.log("Servidor rodando!");
    }
    );