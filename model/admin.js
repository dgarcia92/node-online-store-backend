'use_strict'
const { Schema, model } = require('mongoose');


const AdminSchema = Schema({
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
    password : {
        type: String,
        required: [true, 'El password es obligatorio'],
    },
    telefono : {
        type: String,
        required: false,
    },
    rol : {
        type: String,
        required: false,
    },
    dni : {
        type: String,
        required: false
    },
});


module.exports = model( 'Admin', AdminSchema );