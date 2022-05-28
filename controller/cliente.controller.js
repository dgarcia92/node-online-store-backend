'use strinct'
const { model } = require('mongoose');
const Cliente  = require('../db/config');


const addCliente = async (req, res) => {
    
    res.status(200).send({
       msg: 'Hola Mundo'
    });
}



module.exports = 
{
    addCliente
}