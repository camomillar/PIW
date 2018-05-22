let posts = []

module.exports.getPosts = function (req, res) {
    res.json(posts)
}

module.exports.getPost = function (req, res) {
    const id = req.params.id
    const post = posts.find(post => (post._id == id))

    if (post) {
        res.json(post)
    } else {
        res.status(404).send('post nao encontrado')

    }
}

module.exports.insertPost = function (req, res) {
    let post = req.body.post
    post._id = posts.length
    posts.push(post)
    if (post) {
        res.send('post adicionado')
    } else {
        res.send('erro ao adicionar post')
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