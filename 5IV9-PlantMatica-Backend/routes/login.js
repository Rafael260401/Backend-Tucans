const { Router } = require('express');
const { check } = require('express-validator');
const { iniciarSesion } = require('../controllers/login');
const { validarDatos } = require('../middlewares/validar');

const router = Router();

router.post('/', [
    check('correo', 'Campo obligatorio').notEmpty(),
    check('password', 'Campo obligatorio').notEmpty(),
    validarDatos
], iniciarSesion);

module.exports = router;