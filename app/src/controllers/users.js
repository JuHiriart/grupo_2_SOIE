const views = require('../modules/file.js');
module.exports = {
    login: (req,res) => res.sendFile(views('user/logIn.html')),
    signin: (req,res) => res.sendFile(views('user/signIn.html')),
}