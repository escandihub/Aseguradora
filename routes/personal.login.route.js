module.exports = (app) => {
    const personal = require('../controllers/personal.controller'),
          Config = require('../Config/Personal.config');

          app.post('/personal/registro', personal.create);

          app.post('/personal/login', personal.Login);

          app.get('/personal/Logout', Config.estaAutenticado,  personal.Logout);

          app.get('/personal/inicio', Config.estaAutenticado, (req, res) => {
                res.json(req.user);
            })
}