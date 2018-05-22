const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var SinestroSchema = new Schema({
    Agente: { type: Schema.Types.ObjectId, ref: 'Personal.model' },
    Siniestro: {type: String },
    Dato: {type: String, required: true},
    Resuelto: {type: Boolean}

})

module.exports = mongoose.model('Siniestro', SinestroSchema)