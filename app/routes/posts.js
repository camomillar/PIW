let controller = require('../controllers/posts')

module.exports = function (app) {
    app.get("/posts", controller.getUsuarios); //usando a funcao get usuarios para quando o digitarem na URL /usuarios
    app.get("/posts/:id", controller.getUsuario); // mesma coisa só que vai retornar um usuario com um certo id
    app.post("/posts", controller.insertPost) //qdo mandar um post para /usuario vai inserir um usuario
    app.delete("/posts", controller.deleteUsuario) // agora deleta
}