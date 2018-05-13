const usuarioShema = require('../Models/Usuario.model');
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
    

    //guardar en la base de datos 
    newUsuario.save().then(data => {
        res.send(data);
        
    }).catch(err => { res.status(500).send({        
            message: err.message || "algo anda mal tio "
        });
    });
    
};



