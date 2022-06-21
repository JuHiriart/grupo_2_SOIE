const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './views');

app.set('puerto', process.env.PORT || 2000);


app.listen(app.get('puerto'), ()=>{console.log(`Abriendo Servidor puerto ${app.get('puerto')}` )});
app.use(express.static(public));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')))
app.get('/productos', (req,res) => res.sendFile(path.join(viewsPath, 'productos.html')))
app.get('/carrito', (req,res) => res.sendFile(path.join(viewsPath, 'carrito.html')))
app.get('/login', (req,res) => res.sendFile(path.join(viewsPath, 'login.html')))
app.get('/registrarse', (req,res) => res.sendFile(path.join(viewsPath, 'registrarse.html')))




