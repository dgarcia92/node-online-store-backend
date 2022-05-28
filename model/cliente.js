'use_strict'
const { Schema, model } = require('mongoose');


const ClienteSchema = Schema({
    nombre : {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    apellido : {
        type: String,
        required: [true, 'El apellido es obligatorio'],
        unique: true
    },
    email : {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    pais : {
        type: String,
        required: false,
    },
    password : {
        type: String,
        required: [true, 'El password es obligatorio'],
    },
    perfil : {
        type: String,
        required: [true, 'El perfil es obligatorio'],
        default: "perfil.png"
    },
    telefono : {
        type: String,
        required: false,
    },
    genero : {
        type: String,
        required: false,
    },
    f_nacimiento : {
        type: String,
        required: false,
    },
    dni : {
        type: String,
        required: [true, 'El dni es requerido'],
    },
});


module.exports = model( 'Cliente', ClienteSchema );