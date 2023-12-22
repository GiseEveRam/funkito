//crear path para que lo tome
const path = require('path');

module.exports = {
    //views
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'));
    },

    item:(req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/item.ejs'));
    },
    
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR UN NUEVO ITEM'),

    cart:(req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/cart.ejs'));
    },
    addToCart:(req, res) => res.send('Esta es la ruta para agregar un ITEM al CARRITO'),

     
}

