const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var SinestroSchema = new Schema({
    Siniestro: {type: String },
    Dato: {type: String},
    resuelto: {type: Boolean}

})

module.exports = mongoose.model('Siniestro', SinestroSchema)