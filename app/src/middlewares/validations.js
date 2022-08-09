module.exports = {
    signIn : [
        body('user.first_name').notEmpty().withMessage("Debes ingresar un Nombre"),
        body('user.last_name').notEmpty().withMessage("Debes ingresar un Apellido"),
        body('user.email').isEmail().withMessage("Debes ingresar un Email válido"),
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