var express = require('express'),
    router = express.Router(),
    configDB = require('../config/database')
    usuarioShema = require('../Models/model.Usuarios');
    var nom;
    router.post('/registro', function(req, res){
        this.nom = req.body.Colonia;
      if(!req.body.nombre || !req.body.apellido_paterno){
          res.json({success: false, msg: 'ingrese sus datos'});
      }  else {
          var newUsuario = new usuarioShema({
              
              nombre: req.body.nombre,              
              apellido_paterno: req.body.apellido_paterno,
              apellido_materno: req.body.apellido_materno,
              Edad: req.body.Edad,
              Telefono: req.body.Telefono,
              Estado: req.body.Estado,
             Domicilio: {
                 Colonia: req.body.Colonia,
                 Numero_ext: req.body.Numero,
                 Numero_int: req.body.Numero_int,
                 CP:  req.body.CP
             },
             Correo: req.body.Correo,
             Password: req.body.Password 
          });

          newUsuario.save(function(err){
              if(err){
                  console.log(err);
                  
                return res.json({success: false, msg: 'wait... some error wey'});   
              }
              res.json({success: true, msg: 'Successful created new user.'});
              // console.log(newUsuario); // para ver el lo que guardamos
              
          });
      }
    });

    module.exports = router;