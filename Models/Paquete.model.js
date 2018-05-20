const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      //modelUsuario = require('./Usuarios');


var SeguroSchema = new Schema({

    Tipo:[ 'vida', 'Auto', 'Casa' ],
    Cobertura: {type: String},
    Vigencia:{type: Date, required: true },
    Costo: {
        type: Number,
        required: true
    },
    //Cliente: {type: Schema.Types.ObjectId, ref: 'Usuario.model'}
});

module.exports = mongoose.model('Seguro', SeguroSchema);