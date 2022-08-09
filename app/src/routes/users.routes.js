const conName  = 'users'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

//validaciones
const {body} = require('express-validator');
const validateSignin = [
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
]

// metodos GET de login y signin, muestran las vistas.
routes.get('/login', con.login);
routes.get('/signin', con.signin);

// muestra el perfil de usuario
routes.get('/:id/profile', con.profile);

// metodo POST de signin. Recibe los datos de la vista signin y los envia al controlador.
routes.post('/signin', validateSignin ,con.signinPost.upload.single('img'), con.signinPost.data);

module.exports = routes;