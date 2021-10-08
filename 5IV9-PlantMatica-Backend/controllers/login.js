const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const iniciarSesion = async (req, res) => {

    try {
        const { correo, password } = req.body;

        const usuario = await User.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msgError: 'Correo o password no son correctos'
            })
        }

        const validClave = bcryptjs.compareSync(password, usuario.password);
        if (!validClave) {
            return res.status(400).json({
                msgError: 'Correo o password no son correctos'
            })
        }

        res.json({
            msg: 'Inicio de sesion exitoso',
            id: usuario.id
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msgError: 'Ocurrio un error'
        })
    }


}

module.exports = {
    iniciarSesion
}