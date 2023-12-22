const path= require('path');

module.exports = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs')),
    // tengo que separar create para GET Y PARA POST
    createView: (req, res) =>res.render(path.resolve(__dirname, '../views/admin/create.ejs')),
    createItem: (req, res) => res.send('Esta es la RUTA para AGREGAR un NUEVO ITEM'),
    editView:(req, res) => res.send('Esta es la vista para EDITAR un ITEM ESPECIFICO'),
    editItem: (req, res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION'),
    deleteItem:  (req, res) => res.send('Esta es la vista para ELIMINAR un ITEM ESPECIFICO')
};