const express = require('express');
const router = express.Router();

const {admin, 
    createView, 
    createItem,
    editView, 
    editItem, 
    deleteItem
} = require('../controllers/admin.controllers');

router.get('/', admin);
router.get('/create', createView);
router.post('/create', createItem);
//POST ESTA ASOCIADO AL BOTON PARA AGREGAR LOS ELEMENTOS
router.get('/edit/:id', editView );
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem );

module.exports = router;