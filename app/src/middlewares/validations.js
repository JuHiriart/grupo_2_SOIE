const {check} = require('express-validator');
const model = require('../models/user.model.js');

module.exports = {

    signIn : [

        check('first_name')

            .notEmpty().withMessage("Debes ingresar un nombre")
            .bail(),

        check('last_name')

            .notEmpty().withMessage("Debes ingresar un apellido")
            .bail(),

        check('email')
        
            .isEmail().withMessage("Debes ingresar un email válido")
            .bail()
        
            .custom( value => { // chequeo que el email no exista en la base de datos
                return model.getByEmail(value) ? false : true; // si el email ya existe, devuelve false
            })
            .withMessage("El email ya existe en nuesra base de datos. Intenta ingresar con tu cuenta o registrate con otro email.")
            .bail(),

        check('password')
            
            .isLength({min:4, max:16})
            .withMessage("la contraseña debe tener entre 4 y 16 caracteres")
            .bail()

            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/) // al menos un numero, una mayuscula y una minuscula
            .withMessage("La contraseña debe tener al menos una mayúscula, una minúscula y un número"),
            
        check('passCon')

            .notEmpty().withMessage("Debes confirmar la contraseña")
            .bail()

            .custom(async (passCon, {req}) => { // chequeo que la contraseña y la confirmacion sean iguales
                const password = req.body.password;
                return password !== passCon ; 
            })
            .withMessage("Las contraseñas no coinciden"),
            
        check('birth')

            .notEmpty().withMessage("Debes ingresar una fecha de nacimiento"),

        check('telefono')

            .matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/)
            .withMessage("Debes ingresar un número de teléfono válido (Arg)"),
        
        check('direccion')

            .notEmpty().withMessage("Debes ingresar una dirección"),

        ],


    logIn : [
        check('email')
        
            .isEmail()
            .withMessage("Debes ingresar un email válido"),

        check('password')
            
            .isLength({min:4, max:16})
            .withMessage("la contraseña debe tener entre 4 y 16 caracteres")
    ],
}