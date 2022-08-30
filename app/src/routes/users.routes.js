const conName  = 'users'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

//validaciones
const validations = require('../middlewares/validations.js');

// metodos GET de login y signin, muestran las vistas.
routes.get('/login', con.login);
routes.get('/signin', con.signin);

// muestra el perfil de usuario
routes.get('/:id/profile', con.profile);

// metodo POST de signin. Recibe los datos de la vista signin y los envia al controlador.
routes.post('/signin', con.signinPost.upload.single('img'), validations.signIn, con.signinPost.data);

// metodo POST de login
routes.post('/login', validations.logIn, con.processLogin);

//lista de usuarios de admins
routes.get('/list', con.userList);

module.exports = routes;