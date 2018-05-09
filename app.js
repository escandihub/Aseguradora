const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');

const app = express();


/**
 * configurar puerto 
 */

 const port = process.env.PORT || 8084;


 /**
  * Middleware  for cors 
  */

  app.use(cors());

  /**
   * Software intermedio para bodyparsing usando json y urlencoding
   */

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

/**
 * express.static es una función de middleware integrada para servir archivos estáticos.
 * Estamos diciendo que la carpeta pública del servidor express es el lugar para buscar los archivos estáticos
 */

 app.use(express.static(path.join(__dirname, 'Views')));

 app.get('/', (req,res) => {
    res.send("Invalid page");
});

app.listen(port, () => {
    console.log('Iniciando en el puerto: ' + port);
    
});
