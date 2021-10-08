const { Router } = require('express');
const { check } = require('express-validator');
//Controladores
const { crearCuenta, getUsuario } = require('../controllers/user');
const { existEmail, existUser, validS, validResidencia } = require('../helpers/validar-datos-user');
const { validarDatos } = require('../middlewares/validar');
const router = Router();

router.post('/', [
    check('username', 'El nombre de usuario debe ser de 5 a 15 caracteres').isLength({ min: 5, max: 15 }).custom(existUser),
    check('correo', 'Formato de correo no valido').isEmail().custom(existEmail),
    check('password', 'La contraseña debe ser de de 6 a 15 caracteres').isLength({ min: 5, max: 15 }),
    check('edad', 'Formato de edad invalido').isNumeric(),
    check('sexo', 'Dato no valido').custom(validS),
    check('estadoMx', 'Estado de residencia no valido').custom(validResidencia),
    validarDatos
], crearCuenta);

router.get('/:id', [
    check('id', 'Ocurrio un error')
], getUsuario);

module.exports = router;