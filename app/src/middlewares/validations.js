const {check} = require('express-validator');
const model = require('../models/user.model.js');

module.exports = {
    signIn : [

        check('first_name')

            .notEmpty()
            .withMessage("Debes ingresar un nombre")
            .bail(),

        check('last_name')

            .notEmpty()
            .withMessage("Debes ingresar un apellido")
            .bail(),

        check('email')

            .notEmpty()
            .withMessage("Debes ingresar un email")
            .bail()
        
            .isEmail()
            .withMessage("Debes ingresar un email válido")
            .bail()
        
            .custom( value => { // chequeo que el email no exista en la base de datos
                return model.getByEmail(value) ? false : true; // si el email ya existe, devuelve false
            }).withMessage("El Email ya existe")
            .bail(),

        check('password')
        
            .notEmpty()
            .withMessage("Debes ingresar una contraseña")
            .bail()
            
            .isLength({min:4, max:16})
            .withMessage("la contraseña debe tener entre 4 y 16 caracteres")
            .bail()

            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/) // al menos un numero, una mayuscula y una minuscula
            .withMessage("La contraseña debe tener al menos una mayúscula, una minúscula y un número"),
            
        check('passCon')

            .notEmpty()
            .withMessage("Debes confirmar la contraseña")
            .bail()

            .custom(async (passCon, {req}) => { 
                const password = req.body.password;
                return password !== passCon ; 
            })
            .withMessage("Las contraseñas no coinciden"),
            
        check('birth')

            .notEmpty().withMessage("Debes ingresar una fecha de nacimiento")

        ],


    signUp : [],
}