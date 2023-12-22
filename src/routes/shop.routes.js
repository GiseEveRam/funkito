const express = require('express');
const router = express.Router();

//llamo al controlador home

const {shop,item,addItem,cart,addToCart } = require('../controllers/shop.controllers');
//Destructuring, saco el controller y lo paso por la funcion

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addToCart);

module.exports = router;