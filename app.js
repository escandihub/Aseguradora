const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      config = require('./Config/database');

var app = express();
//var appPersonal = express();
/**
 * Base de datos
 */
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.MONGO_URI)
.then(() => {
    console.log("conectado to the database lil bih");    
}).catch(err => {
    console.log('no se pudo conecctar to the database. Exiting now...');
    process.exit();
});

/**
 * API
 */
 //var newUsuario = require('./routes/newUsuario');
 
/**
 * configurar puerto 
 */



 const port = process.env.PORT || 8080;

  /**
   * Software intermedio para bodyparsing usando json y urlencoding
   */
      // application/x-www-form-urlencoded
      app.use(session({       
        secret: 'secret cat',
        resave: true,
        saveUninitialized: true
       }));
   app.use(bodyParser.json()); //parsear la informacion
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(passport.initialize());
   app.use(passport.session());
   
  /**
 * express.static es una función de middleware integrada para servir archivos estáticos.
 * Estamos diciendo que la carpeta pública del servidor express es el lugar para buscar los archivos estáticos
 */

app.use(express.static('public'));
app.set("view engine", "jade");

app.get('/', (req, res) => {
    res.render('index');
})

require('./routes/usuario.route')(app);
require('./routes/personal.login.route')(app);

/**
 * Administrador subDominio
 */
/*
Admin.use(session({       
    secret: 'secret cat',
    resave: true,
    saveUninitialized: true
   }));

Admin.use(bodyParser.json()); //parsear la informacion
Admin.use(bodyParser.urlencoded({ extended: true }));
Admin.use(passport.initialize());
Admin.use(passport.session());

Admin.use(express.static('public'));
Admin.set("view engine", "jade");

Admin.get('/personal', (req,res) => {
    //res.send('hola ');
    res.render('login');
    console.log(req.body.password);
 });
require('./routes/personal.login.route')(Admin);
const port2 = 8082;
Admin.listen(port2, () => {
    console.log('Iniciando en el puerto: ' + port2);    
});
*/
app.listen(port, () => {
    console.log('Iniciando en el puerto: ' + port);    
});

