const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


var PersonalShema = new Schema({
    Nombre: {type: String, require: true},
    Apellido: {type: String, require: true},
    Edad: {type: Number, require: true, min: 18, max: 95},
    NSS: {type: String, require: true},
    Domicilio: {type: String, require: true},
    Correo: {type: String, require: true},
    Password: {type: String, require: true, min: 8},
    Tipo: {type: Schema.Types.ObjectId, ref: 'tipoPersonal.model'}

});

module.exports = mongoose.model('Personal', PersonalShema);