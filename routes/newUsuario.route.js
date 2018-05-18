    module.exports = (app) => {
        const usuario = require('../controllers/newUsuario.controller'),
              confiPassport = require('../Config/usuario.config');

    app.post('/registro', usuario.create);

    app.post('/login', usuario.Login);

    app.get('/Logout', confiPassport.estaAutenticado,  usuario.Logout);

    app.get('/inicio', confiPassport.estaAutenticado, (req, res) => {
        res.json(req.user);
    })
    }