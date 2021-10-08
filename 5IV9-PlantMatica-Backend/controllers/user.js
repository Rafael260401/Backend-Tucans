const bcryptjs = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

const crearCuenta = async(req, res) => {

    const { username, correo, password, estadoMx, sexo, edad } = req.body;
    const id = uuidv4();
    const user = new User({ id, username, correo, password, estadoMx, sexo, edad });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    const usuario = await user.save();

    res.json({
        msg: 'Se creo la cuenta de manera exitoso'
    });

}

const getUsuario = async(req, res) => {

}

module.exports = {
    crearCuenta,
    getUsuario
}