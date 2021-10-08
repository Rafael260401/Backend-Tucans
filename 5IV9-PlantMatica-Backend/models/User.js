const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contrasena requerida']
    },
    estadoMx: {
        type: String,
        emun: [
            'no',
            'Resido fuera del pais',
            'Aguascalientes',
            'Baja California',
            'Baja California Sur',
            'Campeche',
            'Chiapas',
            'Chihuahua',
            'Coahuila de Zaragoza',
            'Colima',
            'CDMX',
            'Durango',
            'Guanajuato',
            'Guerrero',
            'Hidalgo',
            'Jalisco',
            'Estado de Mexico',
            'Michoacan de Ocampo',
            'Morelos',
            'Nayarit',
            'Nuevo Leon',
            'Oaxaca',
            'Puebla',
            'Queretaro de Arteaga',
            'Quintana Roo',
            'San Luis Potosi',
            'Sinaloa',
            'Sonora',
            'Tabasco',
            'Tamaulipas',
            'Tlaxcala',
            'Veracruz de Ignacio de la Llave',
            'Yucatan',
            'Zacatecas',
        ]
    },
    sexo: {
        type: String,
        emun: [
            'Masculino',
            'Femenino',
            'Prefiero no decirlo'
        ]
    },
    edad: {
        type: Number
    },
    state: {
        type: Boolean,
        default: true
    },
    rol: {
        type: String,
        required: true,
        default: "Usuario",
        emun: ['Usuario', 'Administrador']
    }

});

module.exports = mongoose.model('User', UserSchema);

