module.exports = (app) => {
    const personal = require('../controllers/personal.controller'),
          personalOperaciones = require('../controllers/persona.registros.controller')
          side = require('../controllers/personal.tipo.controller');
          confiPassport = require('../Config/passportConfig');

          app.get('/personal', (req, res) => {
            res.render('loginpersonal');
            })
          app.post('/personal/registro',  side.isAdministrador, personalOperaciones.create);
          app.post('/personal/paquete',  side.isAgente, personalOperaciones.paquete);
          app.post('/personal/siniestro', confiPassport.estaAutenticado, side.isAgente, personalOperaciones.siniestro);

          app.post('/personal/login', personal.Login);

          app.get('/personal/logout', confiPassport.estaAutenticado,  personal.Logout);

          app.get('/personal/menu', side.isAgente, (req, res) => {
                //res.json(req.user);
                res.render('dashboardAgente'/*, {usuario: req.user.Tipo}*/);
                //console.log(req.user);
                
            });
            /*
        app.get('/personal/siniestro', Config.estaAutenticado, side.isAgente, (req, res) =>{
            res.send({msg: 'esto solo un agente puede acceder'})
        })

        app.get('/personal/registroAgente', Config.estaAutenticado, side.isAdministrador,  (req, res) =>{
            res.send({msg: 'esto solo un Administrador puede acceder que es registrar'})
        })

        app.post('/personal/Registroajustaor', Config.estaAutenticado, side.isATC, (req, res) => {

        })
*/
}