const express = require('express');
const path = require('path');
const app = express();
const method = require( 'method-override' );
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');
const cors = require('cors');
// start server
const listen = require( './modules/listen.js' );
app.listen(listen.port, listen.callback() );

app.use( express.urlencoded({extended:true}) ); //req.body y req.query
app.use( express.json() ); //procesar info que venga en formato json
app.use(method('_method')); // En la url poner ?m= un metodo no común


// set public directory
app.use(  require( './modules/public.js') );

//session
app.use( session({
    secret: 'Proyecto SOIE',
    resave: true,
    saveUninitialized: true
}));

//cookies
app.use(cookieParser());
app.use(cookieAuthMiddleware);

//api
app.use(cors());
// set view engine
app.set('views', path.resolve(__dirname,'views') );
app.set('view engine', 'ejs' ); //implementación del motor de templates

// set routing
app.use( require( './routes/main.routes.js') ); //con esta linea pedis todas las rutas
app.use( '/products' , require( './routes/products.routes.js'  ) );
app.use( '/checkout' , require( './routes/checkout.routes.js'  ) );
app.use( '/users'    , require( './routes/users.routes.js'     ) );

//api
app.use("/api/users", require("./routes/api/users.api.routes.js"))
app.use("/api/products", require("./routes/api/products.api.routes.js"))

