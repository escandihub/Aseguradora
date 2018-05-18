const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


var PersonalShema = new Schema({
    Nombre: {type: String, require: true},
    Apellido: {type: String, require: true},
    Telefono: {type: String, require: true},
    Edad: {type: Number, require: true, min: 18, max: 95},
    NSS: {type: Number, require: true},
    Domicilio: {type: String, require: true},
    Correo: {type: String, require: true},
    Password: {type: String, require: true, min: 8},
    Tipo: { type: String}
    //Rol: { type: String, enum: ['Administrador', 'Agente', 'Atencion a Cliente']}
    //Tipo: {type: Schema.Types.ObjectId, ref: 'tipoPersonal.model'}

});

PersonalShema.pre('save', function(next){
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

PersonalShema.methods.compararPassword = function(Password, callBack){
    bcrypt.compare(Password, this.Password, function(err, res){
        if(err){
            return callBack(err);
        }
        callBack(null, res);
        console.log('pase por comparar password');
        
    })
}
module.exports = mongoose.model('Personal', PersonalShema);