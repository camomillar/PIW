let controller = require('../controllers/usuarios')

module.exports = function (app) {
    app.get("/usuarios", controller.getUsuarios); //usando a funcao get usuarios para quando o digitarem na URL /usuarios
    app.get("/usuarios/:id", controller.getUsuario); // mesma coisa só que vai retornar um usuario com um certo id
    app.post("/usuarios", controller.insertPost) //qdo mandar um post para /usuario vai inserir um usuario
    app.delete("/usuarios", controller.deleteUsuario) // agora deleta
}