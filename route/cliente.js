const { Router } = require('express');
const clienteController = require('../controller/cliente.controller')
const router = Router();

router.post("/", clienteController.addCliente);

router.post("/login", clienteController.login);

module.exports = router;