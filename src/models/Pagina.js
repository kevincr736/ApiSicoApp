const mongoose = require("mongoose");
const PaginaSchema = mongoose.Schema({

    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Apellido: {
        type: String,
        required: true,
    },
    Edad: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model("Pagina", PaginaSchema);