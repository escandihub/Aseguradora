const schema = require('../Models/poliza.model');

exports.poliza = (req, res) => {
    //console.log(!req.user._id);
    if(!req.user._id) { res.status(404).send({msg: 'error usuario corrupto'});}
    
    const ContrataPoliza = new schema({
        Dato_Cliente: req.user._id,

        Asegurado: {
            Beneficiario: req.body.beneficiario,
            Marca: req.body.marca,
            Modelo: req.body. marca,
            Version: req.body.version,
            Placa: req.body.placa,
            Uso: req.body.uso        
        },
        Tipo_Paquete: {
            nombre: req.body.nombre,
            cobertura: req.body.cobertura,
            lugar: req.body.lugar,
            //fecha: 
        }
         
    })
    
}