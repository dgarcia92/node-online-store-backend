const { Router } = require('express');
const clienteController = require('../controller/cliente.controller')
const router = Router();

router.post("/", clienteController.addCliente);

module.exports = router;