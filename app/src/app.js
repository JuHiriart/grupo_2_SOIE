const express = require('express');
const path = require('path');
const app = express();
const method = require('method-override');


const listen = require('./modules/listen.js');
app.listen(listen.port, listen.callback());

app.use(require('./modules/public.js'));




app.use(express.urlencoded({extended:false})); //req.body y req.query
app.use(express.json()); //procesar info que venga en formato json
app.use(method('m')); // En la url poner ?m= un metodo no común




app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs'); //implementación del motor de templates


app.use(require('./routes/main.routes.js'));                    //con esta linea pedis todas las rutas
app.use('/products',require('./routes/products.routes.js'));
app.use('/checkout',require('./routes/checkout.routes.js'));
app.use('/users',require('./routes/users.routes.js'));