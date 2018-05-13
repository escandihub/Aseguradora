const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var ReclamoSchema = new Schema({
    _id:{},
    Cliente: {type: Schema.Types.ObjectId, ref: 'Usuario.model' },
    Queja: {type: String},
    Atendida: {
        Agente: {type: Schema.Types.ObjectId, ref: 'tipoPersonal'},
        Ok: {type: Boolean}
    }
});

module.exports = mongoose.model('Reclamo', ReclamoSchema);