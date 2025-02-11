const models = {
    users : require('../models/user.model.js')
}

function cookieAuthMiddleware (req, res, next) {
    if (req.cookies.rememberMe != undefined && req.session.userLogged == undefined){
        
        let userList;

        if(usersJSON = ''){
            userList = [];
        } else {
            userList = models.users.index();
        }
        
        for (let index = 0; index < userList.length; index++) {
            if(userList[index].email == req.cookies.rememberMe ) {
                var userLogging = userList[index];
                break;
            }
        }

        req.session.userLogged = userLogging;
        req.session.userLogged.admin = [3,4].includes(parseInt(req.session.userLogged.id_category));
    }
    
    next();
}

module.exports = cookieAuthMiddleware;