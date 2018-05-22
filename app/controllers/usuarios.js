let usuarios = []

module.exports.getUsuarios = function (req, res) {
    res.json(usuarios)
}

module.exports.getUsuario = function (req, res) {
    const id = req.params.id
    const usuario = usuarios.find(usuario => (usuario._id == id))

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).send('usuario nao encontrado')

    }
}

module.exports.insertUsuario = function (req, res) {
    let usuario = req.body.usuario
    usuario._id = usuarios.length
    usuarios.push(usuario)
    if (usuario) {
        res.send('usuario adicionado')
    } else {
        res.send('erro ao adicionar usuario')
    }
}

module.exports.deleteUsuario = function (req, res) {
    const id = req.params.id
    const usuario = usuarios.find(usuario => (usuario._id == id))
    if (usuario) {
        const index = usuarios.indexOf(usuario)
        usuarios.splice(index, 1)
        res.json(usuarios)
    } else {
        res.send('usuario nao encontrado')
    }
}