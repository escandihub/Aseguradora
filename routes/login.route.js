module.exports = (app) => {
    const sesion = require('../controllers/newUsuario.controller');

    app.use('/login', (req, res) =>{
        res.json({msg :'we\'ll be create a cookis'});
    });
}