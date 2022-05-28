'use strict'
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const { dbConnection } = require('./db/config');

const port = process.env.PORT || 4201;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json({ limit: 50 }));
app.use(express.static('public'));

//Router
app.use('/api/cliente', require('./route/cliente'));

dbConnection();

app.listen(port, () => {
    console.log('Servior corriendo en el puerto', port);
});

module.exports = app;



