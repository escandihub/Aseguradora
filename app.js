const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose')
      config = require('./Config/database');

var app = express();
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

 const port = process.env.PORT || 8084;

  /**
   * Software intermedio para bodyparsing usando json y urlencoding
   */
      // application/x-www-form-urlencoded
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));
  /**
 * express.static es una función de middleware integrada para servir archivos estáticos.
 * Estamos diciendo que la carpeta pública del servidor express es el lugar para buscar los archivos estáticos
 */
app.use(express.static(path.join(__dirname, 'Views')));
app.get('/', (req,res) => {
   res.send("Invalid page");
});

require('./routes/newUsuario.route')(app);
require('./routes/login.route')(app);


app.listen(port, () => {
    console.log('Iniciando en el puerto: ' + port);    
});
