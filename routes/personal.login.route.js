module.exports = (app) => {
    const personal = require('../controllers/personal.controller'),
          personalOperaciones = require('../controllers/persona.registros.controller'),
          Config = require('../Config/Personal.config'),
          side = require('../controllers/personal.tipo.controller');

          app.post('/personal/registro', Config.estaAutenticado, side.isAdministrador, personalOperaciones.create);
          app.post('/personal/paquete', Config.estaAutenticado, side.isAgente, personalOperaciones.paquete);

          app.post('/personal/login', personal.Login);

          app.get('/personal/logout', Config.estaAutenticado,  personal.Logout);

          app.get('/personal/inicio', Config.estaAutenticado, (req, res) => {
                //res.json(req.user);
                res.render('dashboard', {usuario: req.user.Tipo});
            })
        app.get('/personal/siniesto', Config.estaAutenticado, side.isAgente, (req, res) =>{
            res.send({msg: 'esto solo un agente puede acceder'})
        })

        app.get('/personal/registroAgente', Config.estaAutenticado, side.isAdministrador,  (req, res) =>{
            res.send({msg: 'esto solo un Administrador puede acceder que es registrar'})
        })

        app.post('/personal/Registroajustaor', Config.estaAutenticado, side.isATC, (req, res) => {

        })

}