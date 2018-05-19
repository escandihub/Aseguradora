const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,

      Personal = require('../Models/Personal.model');


      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });

      passport.deserializeUser(function(id, done) {
        Personal.findById(id, function (err, user) {
          done(err, user);
        });
      });


      passport.use(new LocalStrategy(
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
            })}
      ));


      exports.estaAutenticado = (req, res, next) =>{
          if(req.isAuthenticated()){
              return next(); //si si puedes entrar 
          }
          res.status(401).send('No puedes entrar a esta direccion sorry');
      }
