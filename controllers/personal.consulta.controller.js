PersonalShema = require('../Models/Personal.model');
paquete = require('../Models/Paquete.model');
siniestro = require('../Models/Siniestro.model');

exports.siniestro = (req, res) => {
    siniestro.findOne()
}

