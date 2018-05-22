const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      Personal = require('../Models/Personal.model'),
      Usuario = require('../Models/Usuario.model');

  


     

      
      passport.use('personal', new LocalStrategy(
          {
          usernameField: 'correo',
          passwordField: 'password'
        },
          (Correo, password, done) => {
            Personal.findOne({Correo: Correo}, (err, usuario) => {                
                if(err){ return done(err); }                
                if(!usuario){
                    return done(null, false, {message: 'el email no existe'});
                }else{
                    usuario.compararPassword(password, (err, Soniguales) => {
                        if(Soniguales){
                            return done(err, usuario);
                        }else{
                            return done(err, false, {message: 'La contraseña es invalida'});
                        }
                    })
                }
              })//other method
        } 
      ));

      passport.use('cliente', new LocalStrategy(
        {
        usernameField: 'correo',
        passwordField: 'password'
      },
        (Correo, password, done) => {
          Usuario.findOne({Correo: Correo}, (err, usuario) => {                
              if(err){ return done(err); }                
              if(!usuario){
                  return done(null, false, {message: 'el email no existe'});
              }else{
                  usuario.compararPassword(password, (err, Soniguales) => {
                      if(Soniguales){
                          return done(err, usuario);
                      }else{
                          return done(err, false, {message: 'La contraseña es invalida'});
                      }
                  })
              }
          })}
    ));


    passport.serializeUser(function(user, done) {
        done(null, user.id);
        
      });

      passport.deserializeUser(function(id, done) {
        Personal.findById(id, function (err, user) {
            if(err) done(err);
            if(user){
                done(null, user);
            }else {
                Usuario.findById(id, function(err, user) {
                    if(err) done(err);
                    done(null, user);
                })
            }
        });
      });
     

      exports.estaAutenticado = (req, res, next) =>{
        if(req.isAuthenticated()){
            return next(); //si si puedes entrar 
        }
        res.status(401).send('No puedes entrar a esta direccion sorry personal');        
    }