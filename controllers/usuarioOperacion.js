const schema = require('../Models/poliza.model');

exports.poliza = (req, res) => {
    //console.log(!req.user._id);
    if(!req.user._id) { res.status(404).send({msg: 'error usuario corrupto'});}
    
    const ContrataPoliza = new schema({
        Dato_Cliente: req.user._id,
            Beneficiario: req.body.beneficiario,
            Marca: req.body.marca,
            Modelo: req.body.modelo,
            Version: req.body.version,
            Placa: req.body.placa,
            Uso: req.body.uso,
        Tipo_Paquete: {
            nombre: req.body.nombre,
            cobertura: req.body.cobertura,
            //lugar: req.body.lugar,
            //fecha: 
        }
         
    })

    ContrataPoliza.save((err) => {
        if(err){
            next(err);
        }else{
            res.json({msg: 'todo esta bien'})
        }

    })
    
}

exports.eliminar = (req, res) => {
    //req.user.id;
    schema.findOneAndDelete({Dato_Cliente: req.user.id}, function (err, doc) {
        if(err) { res.json({msg: 'no se a podido eliminar: ' +  err}) }
        else{ res.json('eliminado' + doc )}
    })
}

exports.ver = (req, res) => {
    schema.find({Dato_Cliente: req.user.id}, (err, doc) =>{
        if(err){ res.json({msg: 'erro en la coneccion'});}
        else { res.json({doc});}
    })
}