const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var modelSchema = new Schema({
    _id: { type: Number},
    slug: {type: String},
    model: {type: String},
    idmake: {type: Number}
});

module.exports = mongoose.model('Modelos', modelSchema);