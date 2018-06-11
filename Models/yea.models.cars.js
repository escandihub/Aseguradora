const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var yearSchema = new Schema({
    _id: { type: Number},
    year: {type: Number},
    idmodel: {type: Number} //id model
});

module.exports = mongoose.model('yearModels', yearSchema);