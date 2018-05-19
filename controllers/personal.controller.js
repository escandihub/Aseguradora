const passport = require('passport'),
      PersonalShema = require('../Models/Personal.model');


      exports.create = (req, res) => {
          if(!req.body.nombre){ res.status(400).send('el nombre ingrese')}
      

      //añadir un nuevo un nuevo personal

      const newPersonal = new PersonalShema({
        Nombre: req.body.nombre,
        Apellido: req.body.apellido,
        Telefono: req.body.telefono,
        Edad: req.body.edad,
        NSS: req.body.nss,
        Domicilio: req.body.domicilio,
        Correo: req.body.correo,
        Password: req.body.password,
        Tipo: req.body.tipo  
      });
      // verificacion si no existe uno previamente

      PersonalShema.findOne({Correo: req.body.correo}, (err, correoExiste) =>{    
          if(correoExiste) return res.status(400).send('Ya  registrado');

          newPersonal.save((err, guardado) => {
              if(err) res.send({msg: 'no mames un error: '+  err});
              res.send(guardado);
             
          });
      });
    };

    exports.Login = (req, res, next) => {
        passport.authenticate('local', (err, usuario, info) => {
            console.log(info);        
            if(err){
                next(err);
            }        
            if(!usuario){            
                return  res.status(400).send({msg: 'correo o contraseña invalida'});
            }
            req.logIn(usuario, (err) => {
                if(err){
                    next(err);            
                }
                res.json( {msg:'login exitoso'});
            })
        })(req, res, next); //invocar el metodo que passport nos proporciona 
        //res.redirect('/inicio');
    }
    
    
    exports.Logout = (req, res) => {
        req.logout();
        res.json({msg: 'adios vulve pronto'});
    }