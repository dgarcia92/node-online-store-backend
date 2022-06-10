'use strinct'
const { model } = require('mongoose');
const Admin  = require('../model/admin');
const bcrypt = require('bcrypt');
const { generarJWT } = require("../helper/generateJWT");

const addAdmin = async (req, res) => {

    const data = req.body
    const { nombre, apellido, email, password, dni, rol } = req.body;

    const admin = new Admin({nombre, apellido, email, password, dni, rol});

    /* Esto se puede pasar en un Helper  para no duplicar info*/
    let existeEmail = await Admin.findOne( { email } );
    if(existeEmail)
    {
        return res.status(404).send({ msg: "El correo ya está registrado"});
    }

    //Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    admin.password = bcrypt.hashSync(admin.password, salt);
    
    let newAdmin = await admin.save();

    res.status(200).send({
        newAdmin
    });
}


const login = async (req, res) => {
    
    const {email, password } = req.body;

    /* Esto se puede pasar en un Helper  para no duplicar info*/
    let admin = await Admin.findOne( { email } );
    if(!admin)
    {
        return res.status(404).send({ msg: "El correo no está registrado"});
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if(!validPassword)
    {
        return res.status(404).send({ msg: "Usuario o contraseña incorrecta"});
    }

     //Generar el JWT
     const token = await generarJWT( admin );

    res.status(200).send({
        admin,
        token
    });
}


module.exports = 
{
    addAdmin,
    login
}