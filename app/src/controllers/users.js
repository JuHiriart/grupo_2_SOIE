const views = require('../modules/file.js');

const models = {
    users : require('../models/user.model.js'),
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

    signinPost: {
        // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
        data : (req,res) => {
            let user = req.body;
            user.id = models.users.getNewId();
            
            user.img = req.file ? 
                `/images/users/avatars/${req.file.filename ?? ''}` :
                '/images/users/avatars/default.jpg';

            models.users.add(user)

            res.send({
                status: "usser signed successfully",
                user: user
            });

            // res.redirect(`/users/${user.id}/profile`);
        },
        upload: models.users.storeFile()
    }
}