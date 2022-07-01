const express = require('express');
const path = require('path');
const app = express();


//-------------------------------------

const listen = require('./modules/listen.js');
app.listen(listen.port, listen.callback());

app.use(require('./modules/public.js'));


const {home} = require ('./controllers/main.js');
const {login,signin} = require ('./controllers/users.js');
const {cart} = require ('./controllers/checkout.js');
const {productList,productDetail} = require ('./controllers/products.js');

app.get('/', home);
app.get('/productList', productList);
app.get('/productCart', cart);
app.get('/productDetail', productDetail); // HACER VISTA DETALLE DE PRODUCTO
app.get('/logIn', login);
app.get('/signIn', signin);
//-------------------------------------