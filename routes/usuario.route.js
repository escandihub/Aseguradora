    module.exports = (app) => {
        const usuario = require('../controllers/usuario.controller'),
              autos = require('../controllers/autos'),
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
        res.json(req.user);
    })
    app.post('/servicio/poliza', confiPassport.estaAutenticado, Operacion.poliza);
    app.get('/servicio/polizadelete', confiPassport.estaAutenticado, Operacion.eliminar);
    app.get('/servicio/ver', confiPassport.estaAutenticado, Operacion.ver);

    // app.get('/cliente/autos', autos.insert);
    // app.get('/cliente/models', autos.modelos);
    // app.get('/cliente/years', autos.years);

    //consulta de la cotizacon 
    app.get('/cliente/auto', autos.consulta);
    app.get('/cliente/auto/:id', autos.getModel);
    app.get('/cliente/model/:idmodel', autos.getYear);


}