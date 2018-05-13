const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      //modelUsuario = require('./Usuarios');


var SeguroSchema = new Schema({

    Tipo_Seguro:[ 'vida', 'Auto', 'Casa' ],
    Fecha:{
        type: Date,
        required: true
    },
    Costo: {
        type: int,
        required: true
    },
    Cliente: {type: Schema.Types.ObjectId, ref: 'Usuario.model'}
});

module.exports = mongoose.model('Seguro', SeguroSchema);