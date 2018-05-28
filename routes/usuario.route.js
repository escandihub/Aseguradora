    module.exports = (app) => {
        const usuario = require('../controllers/usuario.controller'),
              Operacion = require('../controllers/usuarioOperacion')
              confiPassport = require('../Config/passportConfig');

    app.get('/cliente', (req, res ) => {
       //res.json('routa cliente');
       ///res.render('session/singin')

    });         
    app.post('/cliente/registro', usuario.create);

    app.post('/cliente/login', usuario.Login);

    app.get('/cliente/Logout', confiPassport.estaAutenticado,  usuario.Logout);

    app.get('/cliente/inicio', confiPassport.estaAutenticado, (req, res) => {
        //res.render('dashboardCliente', {usuario: req.user.nombre});
        res.json({msg: req.user});
    })
    app.get('/servicio/poliza', confiPassport.estaAutenticado, Operacion.poliza);

}