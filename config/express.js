let express = require('express')
let usuariosRotas = require('../app/routes/usuarios')
let postsRotas = require('../app/routes/usuarios')

let bodyParser = require('body-parser')

module.exports = function () {
    var app = express();
    app.set("port", 3000)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }));
    usuariosRotas(app);
    postsRotas(app);

    return app;
}