//llamamos a express
const express = require('express');
const app = express();
const path= require('path');
const bodyParser= require('body-parser'); //faltaba por eso no coria
const methodOverride = require('method-override') //requrimos y luego configuramos
/*Routes Imports */
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');


const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"./src/views"));             //une ruta donde esta app con views la ruta es lineal

//metodo override: capturamos cualquier peticion que no sea un post un get,para JS lo pueda entender
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));    

app.use(express.static('public'));

                           

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:{PORT}`));