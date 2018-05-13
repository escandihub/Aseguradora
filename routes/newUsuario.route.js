    module.exports = (app) => {
        const usuario = require('../controllers/newUsuario.controller');

    app.post('/registro', usuario.create);

    }