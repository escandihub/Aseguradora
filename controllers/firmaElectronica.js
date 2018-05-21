const bcrypt = require('bcrypt-nodejs');

exports.firmaElectronica = (req, res) => {
    bcrypt.genSalt(15, (err, salt) => {
        if(err){
            res.json({msg: 'no genero el hash'});
        }
        bcrypt.hash(req.user.id, salt, null, (err, hash) => {
            if(err){ next(err);}
            return hash;  
        })
    })
}