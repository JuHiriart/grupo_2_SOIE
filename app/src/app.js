const express = require('express');
const path = require('path');
const app = express();


const listen = require('./modules/listen.js');
app.listen(listen.port, listen.callback());

app.use(require('./modules/public.js'));

//---------------
app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');



//---------------

app.use(require('./routes/main.routes.js')); //con esta linea pedis todas las rutas
app.use('/productos',require('./routes/products.routes.js'));
app.use('/checkout',require('./routes/checkout.routes.js'));
app.use('/usuarios',require('./routes/users.routes.js'));