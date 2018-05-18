const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var tipoPersonalSchema = new Schema({
    _id: {type: String},
    Tipo: {Personal: String},
});


module.exports = mongoose.model('TipoPersonal', tipoPersonalSchema);

