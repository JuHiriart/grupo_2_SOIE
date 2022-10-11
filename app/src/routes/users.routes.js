const conName  = 'users'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

//validaciones
const validations = require('../middlewares/validations.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authClientMiddleware = require('../middlewares/authClientMiddleware.js');
const authAdminMiddleware = require('../middlewares/authAdminMiddleware.js');
const checkCart = require("../middlewares/checkCart.js");


// metodos GET de login y signin, muestran las vistas.
routes.get('/login', checkCart , guestMiddleware, con.login);
routes.get('/signin', guestMiddleware, con.signin);

// muestra el perfil de usuario
routes.get('/profile', checkCart, authClientMiddleware, con.profile);

// metodo POST de signin. Recibe los datos de la vista signin y los envia al controlador.
routes.post('/signin', checkCart, con.signinPost.upload.single('img'), validations.signIn, con.signinPost.data);

// metodo POST de login
routes.post('/login',validations.logIn, con.processLogin);

//lista de usuarios de admins
routes.get('/list', checkCart, authAdminMiddleware, con.userList);

// muestra el formulario de edicion de usuario
routes.get('/edit/:id', authAdminMiddleware, con.edit);

// metodo POST de edicion de usuario
routes.put('/edit/:id', con.editPut);

// metodo DELETE de eliminacion de usuario
routes.get('/delete/:id', con.delete);

routes.get('/mkAdm/:id', con.mkAdm);
routes.get('/delAdm/:id', con.delAdm);

routes.get('/logout', con.logout);

module.exports = routes;