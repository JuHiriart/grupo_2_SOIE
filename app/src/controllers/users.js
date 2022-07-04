const views = require('../modules/file.js');
module.exports = {
    login: (req,res) => res.render(views('user/logIn')),
    signin: (req,res) => res.render(views('user/signIn')),
}