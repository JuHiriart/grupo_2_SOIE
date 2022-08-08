const views = require('../modules/file.js');


module.exports = {
    login: (req,res) => {
        res.render( views('users/login') , {
            title : 'Login',
            style : 'login',
            products : {}
        })
    },
    signin: (req,res) => {
        res.render( views('users/signin') , {
            title : 'Sign In',
            style : 'signin',
            user : {},
        });
    },

    signinPost: (req,res) => {
        let data = req.body;
        // res.send(data);
        
    }
}