const jwt = require('jsonwebtoken');
const moment = require('moment');

const generarJWT = ( user ) => {

    return new Promise ((resolve, reject) => {
        
        const payload = {
            user : user.id,
            nombre : user.nombre,
            apellido : user.apellido,
            email : user.email,
            iat: moment().unix(),
            exp: moment().add(7, 'days').unix(),
        };
        
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, (err, token) =>{

            if(err){
                console.log(err);
                reject('No se pudo generaar el token');
            }else{
                resolve( token );
            }
        });

    });
}

module.exports = 
{
    generarJWT
}