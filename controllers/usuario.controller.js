const passport = require('passport'),
      usuarioShema = require('../Models/Usuario.model');
    // nombre de la accion resevada por mongoose 
exports.create = (req, res) => {
    if(!req.body.nombre){
        return res.status(400).send({ message: " no debe estar vacio"});
       // res.json(({ message: 'no debe estar vacio'}));
    }
     //nuevo usuario 
     
        const newUsuario = new usuarioShema({
              
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


    usuarioShema.findOne({Correo: req.body.Correo}, (err, usuarioExistente) =>{
        if(usuarioExistente){
            return res.status(400).send('Ya exista registrado');
        }//en todo caso guarddar
            //guardar en la base de datos 
        newUsuario.save((err) =>{
            if(err){//entonces crea el nuevo usuario 
                next(err);
            } 
            req.logIn(newUsuario, (err) =>{
                if(err){
                    next(err);
                }
                res.send('Usuario creado'); //render to
            });
        });
    });

    
    
};

exports.Login = (req, res, next) => {
    passport.authenticate('cliente', (err, usuario, info) => {
        console.log(info);        
        if(err){
            next(err);
        }        
        if(!usuario){            
            return res.status(401).send({success: false, msg: 'correo o contraseña incorrecto'})
        }
        req.logIn(usuario, (err) => {
            if(err){
                next(err);            
            }
            //res.json( {msg:'login exitoso'});
            res.redirect('inicio');
        })
    })(req, res, next); //invocar el metodo que passport nos proporciona 
    //res.redirect('/inicio');
}


exports.Logout = (req, res) => {
    req.logout();
    //res.json({msg: 'adios vulve pronto'});
    res.redirect('/');
}

