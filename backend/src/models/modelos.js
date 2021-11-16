//schema
const {Schema, model} = require('mongoose');
const datoschema = new Schema({
    // nombre:{type: String, require: true},
    nombre: String,
    contraseña: String
});




module.exports = model('formato', datoschema);