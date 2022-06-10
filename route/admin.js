const { Router } = require('express');
const adminController = require('../controller/admin.controller')
const router = Router();

router.post("/", adminController.addAdmin);

router.post("/login", adminController.login);

module.exports = router;