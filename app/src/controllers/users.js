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

    profile: async (req,res) => {
        // let user = models.users.getById(req.params.id);
        let user = await db.User.findByPk(req.params.id);
        // res.send(user);
        res.render( views('users/profile') , {
            title : 'Profile',
            style : 'profile',
            user : user ?? {},
            userLogged : req.session.userLogged
        });
    },

    // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
    signinPost: {
        // manejo de datos del formulario
        data : async (req,res) => {

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
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            user.id_category = 1 // por defecto, el usuario es un cliente;
            delete user.passCon;

            
            user.image = req.file ? 
                `/images/users/avatars/${req.file.filename ?? ''}` :
                '/images/users/avatars/default.jpg';
            
            user = await db.User.create(user);

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
    processLogin: async (req, res) =>  {

        let errors = validationResult(req);

        if (errors.isEmpty()){


            let userList;
            if(usersJSON = ''){
                userList = [];
            } else {
                userList = await db.User.findAll();
            }

            let userLogging = null;
            
            // busco el usuario en la lista de usuarios
            for ( let user of userList ) {

                // let tableData = { email: user.email, password: user.password };
                // console.table(tableData);
                
                if( user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password) ) {
                    userLogging = user;
                    break;
                }
            }

            // si el usuario no existe, redirijo a la vista de login
            if ( !userLogging ) {
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

            if (req.body.rememberMe){
                res.cookie('rememberMe', userLogging.email, { maxAge: 1000 * 60 * 10 })   //cookie te recuerda 10 minutos
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

    userList: async (req, res) => {

        let users = await db.User.findAll();
        
        res.render( views('users/list') , {
            title : 'Lista de usuarios',
            style : 'userList',
            users : users,
            userLogged : req.session.userLogged
        })
    }
}