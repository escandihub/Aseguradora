const passport = require('passport');     
    
    exports.Login = (req, res, next) => {
        passport.authenticate('personal', (err, personal, info) => {
            console.log(info);        
            if(err){
                next(err);
            }        
            if(!personal){            //poner resultado mediante ajax
                //return  res.status(400).send({msg: 'correo o contraseña invalida'});
                //res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                return res.status(401).send({success: false, msg: 'correo o contraseña incorrecto'})
            }
            req.logIn(personal, (err) => {
                if(err){
                    next(err);            
                }
                res.json( {msg:'login exitoso'});
                //res.render('/inicio', {usuario: req.user.Tipo});
               //res.redirect('menu');
               //console.log(req.user);
               
                
            })
        })(req, res, next); //invocar el metodo que passport nos proporciona 
        //res.redirect('/inicio');
    }
    
    
    exports.Logout = (req, res) => {
        req.logout();
        //res.json({msg: 'adios vulve pronto'});
        res.redirect('/');
    }

    
