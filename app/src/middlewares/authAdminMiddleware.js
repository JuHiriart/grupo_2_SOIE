function authAdminMiddleware(req, res, next) {

    if(req.session.userLogged != undefined){
        if(req.session.userLogged.id_category == 3 ||req.session.userLogged.id_category == 4){
            next();
        }
    } else {
        res.send('solo administradores');
    }

}

module.exports = authAdminMiddleware;