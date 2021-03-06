'use strinct'
const { model } = require('mongoose');
const Cliente  = require('../model/cliente');
const bcrypt = require('bcrypt');
const { generarJWT } = require("../helper/generateJWT");

const addCliente = async (req, res) => {
    
    const data = req.body
    const { nombre, apellido, email, password } = req.body;

    const cliente = new Cliente({nombre, apellido, email, password});

    /* Esto se puede pasar en un Helper  para no duplicar info*/
    let existeEmail = await Cliente.findOne( { email } );
    if(existeEmail)
    {
        return res.status(404).send({ msg: "El correo ya está registrado"});
    }

    //Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    cliente.password = bcrypt.hashSync(cliente.password, salt);
    
    let newClient = await cliente.save();

    res.status(200).send({
        newClient
    });
}



const login = async (req, res) => {
    
    const {email, password } = req.body;

    /* Esto se puede pasar en un Helper  para no duplicar info*/
    let cliente = await Cliente.findOne( { email } );
    if(!cliente)
    {
        return res.status(404).send({ msg: "El correo no está registrado"});
    }

    const validPassword = await bcrypt.compare(password, cliente.password);

    if(!validPassword)
    {
        return res.status(404).send({ msg: "Usuario o contraseña incorrecta"});
    }

     //Generar el JWT
     const token = await generarJWT( cliente );

    res.status(200).send({
        cliente,
        token
    });

}


module.exports = 
{
    addCliente,
    login
}