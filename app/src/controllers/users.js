const views = require('../modules/file.js');


module.exports = {
    login: (req,res) => {
        res.render( views(login) , {
            title : 'Login',
            style : 'login',
            products : {}
        })
    },
    signin: (req,res) => {
        res.render( views(signin) , {
            title : 'Sign In',
            style : 'signin',
        });
    },
}