
exports.isAdministrador = (req, res, next) => {
    if(req.user.Tipo == 'Administrador'){ return next();}
    //res.redirect('http://localhost:8084/')
    res.send({msg:'Previlegios de solo un administrador'})
}

exports.isAgente = (req, res, next) => {
    if(req.user.Tipo == 'Agente') { return next();}
    res.send({msg:'no puedes acceder solo el agente '})
}

exports.isATC = (req, res, next) => {
 if(req.user.Tipo == 'ATC'){ return next(); }
 res.send({msg:'solo atencion acliente puede consultar ajustadores'})
}