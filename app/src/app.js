const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './views');

app.set('puerto', process.env.PORT || 2000);


app.listen(app.get('puerto'), ()=>{console.log(`Abriendo Servidor puerto ${app.get('puerto')}` )});
app.use(express.static(public));

app.get('/', (req,res) => res.sendFile(path.join(viewsPath, 'index.html')))
app.get('/productList', (req,res) => res.sendFile(path.join(viewsPath, 'productList.html')))
app.get('/productCart', (req,res) => res.sendFile(path.join(viewsPath, 'productCart.html')))
app.get('/productDetail', (req,res) => res.sendFile(path.join(viewsPath, 'productDetail.html'))) // HACER VISTA DETALLE DE PRODUCTO
app.get('/logIn', (req,res) => res.sendFile(path.join(viewsPath, 'logIn.html')))
app.get('/signIn', (req,res) => res.sendFile(path.join(viewsPath, 'signIn.html')))