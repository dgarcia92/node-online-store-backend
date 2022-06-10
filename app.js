'use strict'
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const { dbConnection } = require('./db/config');

const port = process.env.PORT || 4201;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//Router
app.use('/api/cliente', require('./route/cliente'));
app.use('/api/admin', require('./route/admin'));

dbConnection();

app.listen(port, () => {
    console.log('Servior corriendo en el puerto', port);
});

module.exports = app;



