function authClientMiddleware(req, res, next) {

    if(req.session.userLogged != undefined){
        next();
    } else {
        res.redirect('/users/login');
    }

}

module.exports = authClientMiddleware;