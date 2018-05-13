/**
 * probando :v
 */

 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

var UsuarioShema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido_paterno:{
        type: String,
        required: true
    },
    apellido_materno:{
        type: String,
        required: true
    },
    Edad : { type: Number, min: 18, max: 95 },
    Telefono: { type: String, 
        validate: { validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        }, 
        message: '{VALUE} no es un telefono valido'
    },
        required: [true, 'Número de teléfono de usuario requerido']
    },
    Estado: { type: String, required: true },
    Domicilio : 
        {
            Colonia: {
                type: String,
                required: true
            },
            Numero_ext: {
                type: Number,
                required: true
            },
            Numero_int: {
                type: Number,
                required: false
            },
            CP: {
                type: Number,
                required: true
            },
        }, 
    Correo: { type: String, required: true },
    Password: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', UsuarioShema);
