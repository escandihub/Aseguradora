

exports.session = (req, res) =>{
 res.session = {cookie:
    {
        path: '/',
        _expires: null,
        originalMaxAge: 100000,
        HttpOnly: true
    }}
};