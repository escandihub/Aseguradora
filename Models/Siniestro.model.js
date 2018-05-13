const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var SinestroSchema = new Schema({
    Tipo: {},
    Perdidad: {},

})

module.exports = mongoose.model('Siniestro', SinestroSchema)