const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      var SiniestroSchema = new Schema({
          Dato_Cliente:{type: Schema.Types.ObjectId, ref: 'Usuario.model'},
          Agente: {type: Schema.Types.ObjectId, ref: 'personal.model'},
          Asegurado: {
              Beneficiario: {type: String},
              Marca:{type: String},
              Modelo: {type: String},
              Version: {type: String},
              Placa: {type: String },
              Uso: {type: String}

          },
          Tipo_Paquete: {
            nombre: [ 'basico', 'Estandar', 'plus' ],
            cobertura:{type: String},
            lugar: {type: String},
            fecha: { type: String}             
          }

      })

module.exports = mongoose.model('Poliza', SiniestroSchema);