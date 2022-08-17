const views = require('../modules/file.js');
const bcrypt = require('bcrypt');

const {validationResult} = require('express-validator'); // requiero esto para la verificacion del Sign In

const models = {
    users : require('../models/user.model.js'),
    products : require('../models/product.model.js')
}


module.exports = {
    login: (req,res) => {
        res.render( views('users/login') , {
            title : 'Login',
            style : 'login',
            users : {}
        })
    },
    signin: (req,res) => {
        res.render( views('users/signin') , {
            errors: {},
            title : 'Sign In',
            style : 'signin',
            user : {},
        });
    },

    profile: (req,res) => {
        let user = models.users.getById(req.params.id);
        res.render( views('users/profile') , {
            title : 'Profile',
            style : 'profile',
            user : user,
        });
    },

    // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
    signinPost: {
        // manejo de datos del formulario
        data : (req,res) => {

            let errors = validationResult(req);
            // si hay errores, vuelvo a la vista signin con los errores
            if (!errors.isEmpty()){
                res.render('users/signin', {
                    errors: errors.mapped(),
                    user : req.body,
                    title : 'Sign In',
                    style : 'signin',
                });
            }

            // si no hay errores, creo el usuario y lo guardo en el archivo
            let user = req.body;
            user.id = models.users.getNewId();
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            
            user.img = req.file ? 
                `/images/users/avatars/${req.file.filename ?? ''}` :
                '/images/users/avatars/default.jpg';

            models.users.add(user)

            // res.send({
            //     status: "User signed successfully",
            //     user: user
            // });

            res.redirect(`/users/${user.id}/profile`);
        },
        // manejo de archivos
        upload: models.users.storeFile()
    }
}