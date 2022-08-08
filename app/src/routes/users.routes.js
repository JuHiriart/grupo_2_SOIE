const conName  = 'users'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

// metodos GET de login y signin, muestran las vistas.
routes.get('/login', con.login);
routes.get('/signin', con.signin);

// metodo POST de signin. Recibe los datos de la vista signin y los envia al controlador.
routes.post('/signin', con.signinPost);

module.exports = routes;