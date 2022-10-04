function authAdminMiddleware(req, res, next) {

    if(!req.session.userLogged) return

    req.session.userLogged.admin ?
        next() : res.redirect('/users/login');
    }

module.exports = authAdminMiddleware;