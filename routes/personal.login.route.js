module.exports = (app) => {
    const personal = require('../controllers/personal.controller'),
          Config = require('../Config/Personal.config'),
          side = require('../controllers/personal.tipo.controller');

          app.post('/personal/registro', personal.create);

          app.post('/personal/login', personal.Login);

          app.get('/personal/logout', Config.estaAutenticado,  personal.Logout);

          app.get('/personal/inicio', Config.estaAutenticado, (req, res) => {
                res.json(req.user);
                /*
                if(req.user.Tipo == 'Administrador'){console.log('soy admin');}
                if(req.user.Tipo == 'Agente') {console.log('soy agente');}  */
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