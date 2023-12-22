
//exportamos objetos
module.exports = {
    home: (req, res) => {
        res.render('index', {
            title: "Home"
        });
    },
    contact: (req,res) => res.send('Esta es la ruta de contacto'),
    about: (req,res) =>res.send('Esta es la ruta SOBRE NOSOTROS'),
    faqs: (req,res) =>res.send('Esta es la ruta de PREGUNTAS FRECUENTES')
}