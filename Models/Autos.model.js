const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var AutosSchema = new Schema({
    _id: { type: Number},
    slug: {type: String},
    make: {type: String}
});

module.exports = mongoose.model('Autos', AutosSchema);