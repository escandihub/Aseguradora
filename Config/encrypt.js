const bcrypt = require('bcrypt-nodejs');
exports.encriptar = (Schema)  => {
    Schema.pre('save', function(next){
        const usuario = this;
        if(!usuario.isModified('Password')){
            return next();
        }
        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                next(err);
            }
            bcrypt.hash(usuario.Password, salt, null, (err, hash) =>{
                if(err){
                    next(err);
                }
                usuario.Password = hash;
                next();
            })
        })
    })
    
    
}
