const express = require("express");
const router = express.Router();
const PaginaSchema = require("../models/Pagina");

// Pagina 1
// Crear Nuevo Usuario
router.post("/Pagina/Pagina1", (req, res) => {
    const RegistroDeUsuario = PaginaSchema(req.body);
    RegistroDeUsuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/*
router.get("/Pagina/PaginaGeneral", (req, res)=>{
  PaginaSchema.find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});
*/


//Pagina 2
//Verifica El Ingreso Del Usuario
router.get("/Pagina/Pagina2/:Email/:Password", (req, res) => {
    const { Email, Password } = req.params;
    if (Email && Password) {
        PaginaSchema.findOne({ Email: Email, Password: Password })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        res.json({ message: "Se deben proporcionar ambos parámetros" });
    }
});


//Pagina 3
//Modificar Los Datos Del Usuario
router.put("/Pagina/Pagina3/:Email/:Password", (req, res) => {
    const { Email, Password } = req.params;
    const { Nombre, Apellido, Edad } = req.body;
    PaginaSchema.updateOne({ Email: Email, Password: Password }, {
            $set: { Password: Password, Nombre: Nombre, Apellido: Apellido, Edad: Edad }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

});

//Borrar Usuario
router.delete("/Pagina/Pagina3/Delete/:Email", (req, res) => {
    const { Email } = req.params;
    PaginaSchema.deleteOne({ Email: Email })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})



module.exports = router;