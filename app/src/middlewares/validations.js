const {check} = require('express-validator');

module.exports = {
    signIn : [
        check('first_name').notEmpty().withMessage("Debes ingresar un Nombre").bail(),
        check('last_name').notEmpty().withMessage("Debes ingresar un Apellido").bail(),
        // check('email').isEmail().withMessage("Debes ingresar un Email válido").bail(),
        check('email').custom(value => {
            return models.users.getByEmail(value).then(user => {
                if (user) {
                    return Promise.reject('El email ya existe');
                }
            });
        }).withMessage("El Email ya existe").bail(),
       // body('password').notEmpty().withMessage("Debes ingresar una contraseña").isLength({min:4, max:16}).withMessage("la contraseña debe tener entre 4 y 16 caracteres").custom(async (passCon, {req}) => { 
       // const password = req.body.password;
    //
       //     if(password !== passCon){
       //         throw new Error('las contraseñas deben ser iguales')
       //     }
       // }),
       // body('passCon').notEmpty().withMessage("Debes confirmar la contraseña")
    ],
    signUp : [],
}