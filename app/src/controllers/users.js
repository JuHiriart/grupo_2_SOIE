const views = require('../modules/file.js');
const bcrypt = require('bcrypt');

const {validationResult} = require('express-validator'); // requiero esto para la verificacion del Sign In
const users = require('../models/user.model.js');

const models = {
    users : require('../models/user.model.js'),
    //products : require('../models/product.model.js') // revisar si hay que borrarla.
}

const db = require('../database/models');


module.exports = {
    login: (req,res) => {
        res.render( views('users/login') , {
            title : 'Login',
            style : 'login',
            user : {},
            userLogged : req.session.userLogged
        })
    },
    signin: (req,res) => {
        res.render( views('users/signin') , {
            title : 'Sign In',
            style : 'signin',
            user : {},
            userLogged : req.session.userLogged
        });
    },

    profile: (req,res) => {
        let user = models.users.getById(req.params.id);
        // res.send(user);
        res.render( views('users/profile') , {
            user: {},
            title : 'Profile',
            style : 'profile',
            user : user,
            userLogged : req.session.userLogged
        });
    },

    // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
    signinPost: {
        // manejo de datos del formulario
        data : (req,res) => {

            // obtengo los posibles errores en la validacion
            let errors = validationResult(req);

            // si hay errores, vuelvo a la vista signin con los errores
            if (!errors.isEmpty()){

                // // debuggin --------
                // res.send({
                //     data : req.body,
                //     errors : errors.mapped(),
                // });
                // // -----------------
                
                res.render('users/signin', {
                    errors: errors.mapped(),
                    user : req.body,
                    title : 'Sign In',
                    style : 'signin',
                    userLogged : req.session.userLogged
                });
                
                return // detengo la ejecucion del controlador
            }

            // // debuggin --------
            // res.send({
            //     data : req.body,
            //     errors : errors.mapped(),
            // });
            // // -----------------

            // si no hay errores, creo el usuario y lo guardo en el archivo
            let user = req.body;
            user.id = models.users.getNewId();
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            user.category = 'client';
            delete user.passCon;
            
            user.img = req.file ? 
                `/images/users/avatars/${req.file.filename ?? ''}` :
                '/images/users/avatars/default.jpg';

            models.users.add(user)

            // // debuggin --------
            // res.send({
            //     status: "User signed successfully",
            //     user: user
            // });
            // // -----------------
            
            res.redirect(`/users/login`);
        },
        // manejo de archivos
        upload: models.users.storeFile()
    },
    //proceso de inicio de sesión
    processLogin: (req, res) =>  {
        let errors = validationResult(req);

        if (errors.isEmpty()){

            let userList;

            if(usersJSON = ''){
                userList = [];
            } else {
                userList = models.users.index();
            }
            


            for (let index = 0; index < userList.length; index++) {
                if(userList[index].email == req.body.email && bcrypt.compareSync(req.body.password, userList[index].password)) {
                    var userLogging = userList[index];
                    break;
                }
            }

            if (userLogging == undefined) {
                return res.render('users/login', {
                    errors: [
                        {msg: "Credenciales inválidas"}
                    ],
                    user : req.body,
                    title : 'Log In',
                    style: 'login',
                    userLogged : req.session.userLogged
                })
            }
            
            

            req.session.userLogged = userLogging;
            if (req.body.rememberMe != undefined){
                res.cookie('rememberMe', userLogging.email, { maxAge: 600000})   //cookie te recuerda 10 minutos
            }
            console.log(req.session.userLogged)
            res.redirect('/')

        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                user : req.body,
                title : 'Log In',
                style : 'login',
                userLogged : req.session.userLogged
            });
        }
    },

    userList: (req, res) => {
        let users = models.users.index();
        
        res.render( views('users/list') , {
            title : 'Lista de usuarios',
            style : 'userList',
            users : users,
            userLogged : req.session.userLogged
        })
    }
}