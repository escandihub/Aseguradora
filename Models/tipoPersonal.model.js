const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var tipoPersonalSchema = new Schema({
    Tipo: {Personal: String}
});


module.exports = mongoose.model('TipoPersonal', tipoPersonalSchema);

