//schema
const {Schema, model} = require('mongoose');
const datoschema = new Schema({
    // nombre:{type: String, require: true},
    nombres: String,
    apellido: String,
    ciudad: String,
    email: String,
    contraseña: String
});




module.exports = model('formato', datoschema);